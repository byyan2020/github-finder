from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from .serializers import ProfileSerializer, RepositorySerializer
from .models import Profile, Repository


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def retrieve(self, request, pk=None):
        queryset = Profile.objects.get(id=pk)
        serializer = ProfileSerializer(queryset)
        ret = dict(serializer.data)
        repository = Repository.objects.filter(profile=ret["id"])
        repository_serializer = RepositorySerializer(repository, many=True)
        # ret["repository"] = dict(repository_serializer.data)
        # print(repository_serializer.data)
        return Response(repository_serializer.data)
