from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from core.views import index, app

from tasks.api import TaskResource

task_resource = TaskResource()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', index, name='index'),
    url(r'^app$', app, name='app'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(task_resource.urls)),
    url('', include('social.apps.django_app.urls', namespace='social'))
)
