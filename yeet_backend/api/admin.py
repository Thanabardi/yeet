from django.contrib import admin
from .models import *


@admin.register(Machine)
class MachineAdmin(admin.ModelAdmin):
    list_display = ('name', 'machine_code')

@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'score', 'is_done', 'logged_in')