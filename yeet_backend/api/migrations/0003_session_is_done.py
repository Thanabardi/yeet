# Generated by Django 4.0.2 on 2022-02-15 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_session'),
    ]

    operations = [
        migrations.AddField(
            model_name='session',
            name='is_done',
            field=models.BooleanField(default=False),
        ),
    ]
