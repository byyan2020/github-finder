from unittest.mock import create_autospec
from django.db import models


class Profile(models.Model):
    login = models.CharField(max_length=240)
    avatar_url = models.CharField(max_length=240)
    html_url = models.CharField(max_length=240)
    followers = models.IntegerField()
    following = models.IntegerField()
    public_repos = models.IntegerField()
    public_gists = models.IntegerField()
    company = models.CharField(max_length=240, null=True, blank=True)
    location = models.CharField(max_length=240, null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.login


class Repository(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    html_url = models.CharField(max_length=240)
    name = models.CharField(max_length=240)
    stargazers_count = models.IntegerField()
    watchers_count = models.IntegerField()
    forks_count = models.IntegerField()

    def __str__(self):
        return self.name
