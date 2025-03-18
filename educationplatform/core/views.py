from django.shortcuts import render

# Create your views here.
def index(request):
   return render(request, 'index.html')

def login(request):
   return render(request, 'registration/login.html')

def register(request):
   return render(request, 'registration/register.html')

def profile(request):
   return render(request, 'profile.html')

def detail(request):
   return render(request, 'detail.html')