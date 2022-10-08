from dataclasses import field
import profile
from rest_framework import serializers
from .models import Profile, Repository


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('login', 'id', 'avatar_url', 'html_url', 'followers', 'following',
                  'public_repos', 'public_gists', 'company', 'location', 'create_at')


class RepositorySerializer(serializers.ModelSerializer):
    # profile = serializers.HyperlinkedIdentityField()

    class Meta:
        model = Repository
        fields = ('profile', 'html_url', 'name', 'stargazers_count',
                  'id', 'watchers_count', 'forks_count')
