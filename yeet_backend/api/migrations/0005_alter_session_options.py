# Generated by Django 4.0.2 on 2022-02-15 13:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_machine_code_session_machine'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='session',
            options={'get_latest_by': 'start', 'ordering': ('score', 'start')},
        ),
    ]
