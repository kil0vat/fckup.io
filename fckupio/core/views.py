from django.shortcuts import render, redirect
from django.contrib.auth import logout as auth_logout


def index(request):
    return render(request, 'index.html', {'request':request})

def app(request):
    return render(request, 'app.html', {'request':request})

def auth_success(request):
    return render(request, 'auth_success.html', {})

def logout(request):
    """Logs out user"""
    auth_logout(request)
    return render_to_response('home.html', {}, RequestContext(request))
