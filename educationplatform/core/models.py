from django.db import models
from django.db.models import ForeignKey
from django.contrib.auth.models import User

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    year_experience = models.PositiveIntegerField()
    university = models.CharField(max_length=100)
    speciality = models.CharField(max_length=100)
    more_about = models.TextField()
    image = models.ImageField(upload_to='teacher_image')

    def __str__(self):
        return f"{self.name} {self.surname}"


class Session(models.Model):
    DAYS_OF_WEEK = [
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    ]

    TIME_SLOTS = [
        ('08:00 - 09:00', '08:00 - 09:00'),
        ('09:00 - 10:00', '09:00 - 10:00'),
        ('10:00 - 11:00', '10:00 - 11:00'),
        ('11:00 - 12:00', '11:00 - 12:00'),
        ('13:00 - 14:00', '13:00 - 14:00'),
        ('14:00 - 15:00', '14:00 - 15:00'),
        ('15:00 - 16:00', '15:00 - 16:00'),
        ('16:00 - 17:00', '16:00 - 17:00'),
    ]

    STATUS_CHOICES = [
        ('Available', 'Available'),
        ('Booked', 'Booked'),
    ]
    topic = models.CharField(max_length=100)
    description = models.TextField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='sessions')
    day = models.CharField(max_length=10, choices=DAYS_OF_WEEK)
    time_slot = models.CharField(max_length=20, choices=TIME_SLOTS)  # Using predefined 24-hour format slots
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Available')

    def __str__(self):
        return f"{self.teacher.name} {self.teacher.surname} - {self.day}: {self.time_slot} ({self.status})"


class BookedSession(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='booked_sessions')
    student = ForeignKey(User, on_delete=models.CASCADE, related_name='booked_students')
    expectation = models.TextField()
    def __str__(self):
        return f"{self.student.username} booked {self.session}"