from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from .serializers import ProfileSerializer, RepositorySerializer
from .models import Profile, Repository


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    @action(methods=['get'], detail=True)
    def repos(self, request, pk=None):
        queryset = Profile.objects.get(pk=pk)
        serializer = ProfileSerializer(queryset)

        repository = Repository.objects.filter(profile=serializer.data["id"])
        repository_serializer = RepositorySerializer(repository, many=True)
        return Response(repository_serializer.data)
