from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    model = Task

admin.site.register(Task, TaskAdmin)
