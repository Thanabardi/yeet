# Generated by Django 4.0.2 on 2022-02-15 14:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_session_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='session',
            options={'get_latest_by': 'start', 'ordering': ('-score', 'start')},
        ),
    ]