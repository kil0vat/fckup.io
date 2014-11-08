from piston.handler import BaseHandler
from takss.models import Task

class TaskHandler(BaseHandler):
   allowed_methods = ('GET','POST')
   model = Task   

    def read(self, request, task_id=None):
        """
        Returns a single post if `blogpost_id` is given,
        otherwise a subset.

        """
        base = Task.objects
        
        if task_id:
            return base.get(pk=task_id)
        else:
            return base.all() # Or base.filter(...)
