from django.shortcuts import render, get_object_or_404, redirect
from .models import Teacher, Session


# Create your views here.
def index(request):
    teachers = Teacher.objects.all()
    context = {'teachers': teachers}
    return render(request, 'index.html', context)


def login(request):
    return render(request, 'registration/login.html')


def register(request):
    return render(request, 'registration/register.html')


def profile(request):
    return render(request, 'profile.html')


def detail(request, pk):
    teacher = get_object_or_404(Teacher, pk=pk)
    days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    schedule = {day: teacher.sessions.filter(day=day).order_by('time_slot') for day in days_of_week}

    context = {
        'teacher': teacher,
        'schedule': schedule,
        'days_of_week': days_of_week,
    }
    return render(request, 'detail.html', context)
