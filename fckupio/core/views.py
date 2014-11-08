from django.shortcuts import render, redirect


def index(request):
    return render(request, 'index.html', {'request':request})

def app(request):
    return render(request, 'app.html', {'request':request})

def auth_success(request):
    return render(request, 'auth_success.html', {})
