from django.db import models
from django.contrib.auth.models import User
from .machine import Machine


class Session(models.Model):
    logged_in = models.BooleanField()
    is_done = models.BooleanField(default=False)
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    start = models.DateTimeField(blank=True, null=True)
    end = models.DateTimeField(blank=True, null=True)
    score = models.IntegerField(blank=True, null=True)
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

    class Meta:
        ordering = ('-score', 'start', )
        get_latest_by = "start"

    def machine_code(self):
        return self.machine.machine_code

    def username(self):
        if self.user is None:
            return "Anonymous"
        return self.user.username