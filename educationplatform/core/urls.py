from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
urlpatterns = [
   path('', views.index, name='index'),
   path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
   path('logout/', auth_views.LogoutView.as_view(), name='logout'),

   path('register/', views.register, name='register'),
   path('profile/', views.profile, name='profile'),
   path('detail/<int:pk>', views.detail, name='detail'),
   path('book/<int:teacher_id>/<int:session_id>', views.book, name='book'),
   path('register_teacher/', views.register_teacher, name='register_teacher'),
   path('teacher_profile/',views.teacher_profile, name='teacher_profile'),
   path('students_list/<int:teacher_id>/<int:session_id>', views.students_list, name='students_list'),
]