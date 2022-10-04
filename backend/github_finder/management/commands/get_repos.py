import imp
from urllib import request
from django.core.management.base import BaseCommand
import requests
from github_finder.models import Profile, Repository


class Command(BaseCommand):
    def handle(self, *args, **options):
        username = input('Username:')

        user_response = requests.get(
            f"https://api.github.com/users/{username}").json()
        # TODO: optimization on user input and validation
        if "message" in user_response and user_response["message"] == "Not Found":
            print("user not exsit")
            return

        repo_response = requests.get(
            f"https://api.github.com/users/{username}/repos").json()

        new_user = Profile(profile=username)
        new_user.save()
        # TODO: optimization on save multiple entries
        for repo in repo_response:
            new_repo = Repository(repository=repo["name"], profile=new_user)
            new_repo.save()
