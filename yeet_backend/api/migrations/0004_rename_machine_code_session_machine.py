# Generated by Django 4.0.2 on 2022-02-15 08:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_session_is_done'),
    ]

    operations = [
        migrations.RenameField(
            model_name='session',
            old_name='machine_code',
            new_name='machine',
        ),
    ]
