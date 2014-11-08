from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from tastypie.authentication import BasicAuthentication
from .models import Task


class TaskResource(ModelResource):
    class Meta:
        queryset = Task.objects.all()
        resource_name = 'task' 
        filtering = {
          #"creator"  :   ['exact', 'range'],
          "creator": ALL_WITH_RELATIONS,
        }
    def dehydrate(self, bundle):
        bundle.data['creator'] = bundle.obj.creator.id if bundle.obj.creator else None
        bundle.data['participant'] = bundle.obj.participant.id if bundle.obj.participant else None
        bundle.data['reviewer'] = bundle.obj.reviewer.id if bundle.obj.reviewer else None
        return bundle
