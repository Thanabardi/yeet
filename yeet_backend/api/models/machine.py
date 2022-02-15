from django.db import models


class Machine(models.Model):
    name = models.CharField(max_length=64)
    machine_code = models.CharField(max_length=64)

    def __str__(self):
        return self.name
