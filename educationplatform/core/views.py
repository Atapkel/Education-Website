from django.contrib.auth.decorators import login_required, user_passes_test
from django.shortcuts import render, get_object_or_404, redirect
from .models import Teacher, Session, BookedSession
from .forms import StudentRegistrationForm, BookSessionForm, TeacherRegistrationForm, AddSession
from django.contrib.auth import login

def index(request):
    teachers = Teacher.objects.all()
    context = {'teachers': teachers}
    return render(request, 'index.html', context)

def is_superuser(user):
    return user.is_superuser

def is_teacher(user):
    return user.is_staff

def register(request):
    if request.method == 'POST':
        form = StudentRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('index')
    else:
        form = StudentRegistrationForm()
    return render(request, 'registration/register.html', {'form': form})

@login_required(login_url='login')
def profile(request):
    booked_sessions = BookedSession.objects.filter(student=request.user)
    days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    # Create a dictionary mapping day to booked sessions
    booked_schedule = {}
    for day in days_of_week:
        booked_schedule[day] = booked_sessions.filter(session__day=day)

    return render(request, 'profile.html', {
        'booked_schedule': booked_schedule,
        'days_of_week': days_of_week,
    })
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

@user_passes_test(is_superuser)
def register_teacher(request):
    if request.method == 'POST':
        form = TeacherRegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = TeacherRegistrationForm()
    return render(request, 'register_teacher.html', {'form': form})


@login_required(login_url='login')
def book(request, teacher_id, session_id):
    teacher = get_object_or_404(Teacher, pk=teacher_id)
    session = get_object_or_404(Session, pk=session_id)
    already_booked = BookedSession.objects.filter(session=session,student=request.user).exists()
    if already_booked:
        context = {
            'teacher': teacher,
            'session': session,
            'name': request.user.username,
            'room': session.topic,
            'already_booked': True,
        }
        return render(request, 'book_session.html', context)
    if request.method == 'POST':
        form = BookSessionForm(request.POST)
        if form.is_valid():
            booking = form.save(commit=False)
            booking.student = request.user
            booking.session = session
            booking.save()
            return redirect('profile')
    else:
        form = BookSessionForm()
    context = {'teacher': teacher,
               'session': session,
               'form': form,
               }
    return render(request, 'book_session.html', context)


@user_passes_test(is_teacher)
@login_required(login_url='login')
def teacher_profile(request):
    teacher = Teacher.objects.get(user=request.user)
    if request.method == "POST":
        form = AddSession(request.POST)
        if form.is_valid():
            session = form.save(commit=False)
            session.teacher = teacher
            form.save()
            return redirect('teacher_profile')
    else:
        form = AddSession()
    days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    schedule = {day: teacher.sessions.filter(day=day).order_by('time_slot') for day in days_of_week}

    context = {'teacher': teacher,
               'schedule': schedule,
               'form': form,
               'days_of_week': days_of_week,
               }
    return render(request, 'teacher_profile.html', context)


def students_list(request, teacher_id, session_id):
    teacher = get_object_or_404(Teacher, pk=teacher_id)
    session = get_object_or_404(Session, pk=session_id)

    booked_sessions = BookedSession.objects.filter(session=session)

    students = [booking.student for booking in booked_sessions]

    context = {
        'teacher': teacher,
        'session': session,
        'booked_sessions': booked_sessions,
        'students': students,
        'name' : request.user.username,
        'room' : session.topic,
    }
    return render(request,'students_list.html', context)
