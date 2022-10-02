from unittest.mock import create_autospec
from django.db import models


class UserName(models.Model):
    username = models.CharField(max_length=240)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class Repository(models.Model):
    repo_name = models.CharField(max_length=240)
    username = models.ForeignKey(UserName, on_delete=models.CASCADE)

    def __str__(self):
        return {self.username: self.repo_name}
