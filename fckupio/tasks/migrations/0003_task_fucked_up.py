# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_auto_20141108_1144'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='fucked_up',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
