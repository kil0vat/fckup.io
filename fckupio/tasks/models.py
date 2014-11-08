from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Task(models.Model):
    creator = models.ForeignKey(User, blank=True, null=True, related_name='tasks_created')
    participant = models.ForeignKey(User, blank=True, null=True, related_name='tasks_joined')
    reviewer = models.ForeignKey(User, blank=True, null=True, related_name='tasks_review')
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(blank=False)

    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    complete = models.BooleanField(default=False)
    fucked_up = models.BooleanField(default=False)
