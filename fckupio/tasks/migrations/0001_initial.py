# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('deadline', models.DateTimeField()),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('complte', models.BooleanField(default=False)),
                ('creator', models.ForeignKey(related_name='tasks_created', blank=True, to=settings.AUTH_USER_MODEL, null=True)),
                ('participant', models.ForeignKey(related_name='tasks_joined', blank=True, to=settings.AUTH_USER_MODEL, null=True)),
                ('reviewer', models.ForeignKey(related_name='tasks_review', blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
