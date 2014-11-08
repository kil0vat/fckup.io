from django.conf.urls.defaults import *
from piston.resource import Resource
from .handlers import TaskHandler

task_handler = Resource(TaskHandler)

urlpatterns = patterns('',
   url(r'^task/(?P<task_id>\d+)/', task_handler),
   url(r'^tasks/', task_handler),
)
