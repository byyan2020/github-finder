from dataclasses import field
import profile
from rest_framework import serializers
from .models import Profile, Repository


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('profile', 'id')


class RepositorySerializer(serializers.ModelSerializer):
    # profile = serializers.HyperlinkedIdentityField()

    class Meta:
        model = Repository
        fields = ('profile', 'repository', 'id')
