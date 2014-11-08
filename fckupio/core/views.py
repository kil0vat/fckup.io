from django.shortcuts import render, redirect


def index(request):
    return render(request, 'index.html', {})

def app(request):
    return render(request, 'app.html', {})

def auth_success(request):
    return render(request, 'auth_success.html', {})
