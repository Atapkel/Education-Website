from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import Session, Teacher, BookedSession

class StudentRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")


class AddSession(forms.ModelForm):
    class Meta:
        model = Session
        fields = ('topic','description','day','time_slot')



class BookSessionForm(forms.ModelForm):
    class Meta:
        model = BookedSession
        fields = ['expectation']
        widgets = {
            'expectation': forms.Textarea(attrs={'rows': 4, 'placeholder': 'What are your expectations for this session?'}),
        }





class TeacherRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    name = forms.CharField(max_length=100, help_text="Enter your first name")
    surname = forms.CharField(max_length=100, help_text="Enter your last name")
    year_experience = forms.IntegerField(min_value=0, help_text="Enter your years of experience")
    university = forms.CharField(max_length=100, help_text="Enter your university")
    speciality = forms.CharField(max_length=100, help_text="Enter your speciality")
    more_about = forms.CharField(widget=forms.Textarea, help_text="Tell us more about yourself")
    image = forms.ImageField(required=False, help_text="Upload a profile image")

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        user.is_staff = True
        if commit:
            user.save()
            Teacher.objects.create(
                user=user,
                name=self.cleaned_data['name'],
                surname=self.cleaned_data['surname'],
                year_experience=self.cleaned_data['year_experience'],
                university=self.cleaned_data['university'],
                speciality=self.cleaned_data['speciality'],
                more_about=self.cleaned_data['more_about'],
                image=self.cleaned_data.get('image')
            )
        return user
