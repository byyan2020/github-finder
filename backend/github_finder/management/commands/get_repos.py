import imp
import logging
from urllib import request
from django.core.management.base import BaseCommand
import requests
from github_finder.models import Profile, Repository


class Command(BaseCommand):
    def handle(self, *args, **options):
        username = input('Username:')

        if Profile.objects.filter(login=username):
            print("user already exsit in the database")
            return
        user = requests.get(
            f"https://api.github.com/users/{username}").json()
        if "message" in user and user["message"] == "Not Found":
            print("user not exsit")
            return

        repo_response = requests.get(
            f"https://api.github.com/users/{username}/repos").json()

        new_user = Profile(
            login=user['login'],
            avatar_url=user['avatar_url'],
            html_url=user['html_url'],
            followers=user['followers'],
            following=user['following'],
            public_repos=user['public_repos'],
            public_gists=user['public_gists'],
            company=user['company'],
            location=user['location'],
        )
        new_user.save()
        repos = []
        for repo in repo_response:
            new_repo = Repository(
                profile=new_user,
                name=repo["name"],
                html_url=repo["html_url"],
                stargazers_count=repo["stargazers_count"],
                watchers_count=repo["watchers_count"],
                forks_count=repo["forks_count"],
            )
            repos.append(new_repo)
        Repository.objects.bulk_create(repos)
