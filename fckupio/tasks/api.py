from django.contrib.auth.models import User
from tastypie.fields import ForeignKey
from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from tastypie.authentication import BasicAuthentication, SessionAuthentication
from tastypie.authorization import Authorization
from .models import Task


class TaskResource(ModelResource):
    creator = ForeignKey("tasks.api.CreatorResource", "creator", null=True, blank=True)
    reviewer = ForeignKey("tasks.api.ReviewerResource", "reviewer", null=True, blank=True)
    participant = ForeignKey("tasks.api.ParticipantResource", "participant", null=True, blank=True)

    class Meta:
        queryset = Task.objects.all()
        resource_name = 'task' 
        filtering = {
          #"creator"  :   ['exact', 'range'],
          "creator": ALL_WITH_RELATIONS,
          "reviewer": ALL_WITH_RELATIONS,
          "participant": ALL_WITH_RELATIONS,
        }
        authorization = Authorization()
        #authentication = SessionAuthentication()

    def dehydrate(self, bundle):
        bundle.data['creator'] = bundle.obj.creator.id if bundle.obj.creator else None
        bundle.data['participant'] = bundle.obj.participant.id if bundle.obj.participant else None
        bundle.data['reviewer'] = bundle.obj.reviewer.id if bundle.obj.reviewer else None
        return bundle

    def hydrate(self, bundle):
        bundle.obj.creator = bundle.request.user
        bundle.obj.participant = bundle.request.user
        return bundle


class CreatorResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'creator'
        filtering = { "id": ALL }

class ReviewerResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'reviewer'
        filtering = { "id": ALL }

class ParticipantResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'participant'
        filtering = { "id": ALL }
