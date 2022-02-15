from django.db import models
from django.contrib.auth.models import User
from .machine import Machine


class Session(models.Model):
    logged_in = models.BooleanField()
    machine_code = models.ForeignKey(Machine, on_delete=models.CASCADE)
    start = models.DateTimeField(blank=True, null=True)
    end = models.DateTimeField(blank=True, null=True)
    score = models.IntegerField(blank=True, null=True)
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

    class Meta:
        ordering = ('score', 'start', )
