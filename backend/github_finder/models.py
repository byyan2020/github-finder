from unittest.mock import create_autospec
from django.db import models


class Profile(models.Model):
    profile = models.CharField(max_length=240)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.profile


class Repository(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    repository = models.CharField(max_length=240)

    def __str__(self):
        return {self.profile: self.repository}
