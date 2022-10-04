from re import U
from django.contrib import admin
from .models import Profile
from .models import Repository

admin.site.register(Profile)
admin.site.register(Repository)
