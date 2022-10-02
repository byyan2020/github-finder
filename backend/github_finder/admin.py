from re import U
from django.contrib import admin
from .models import UserName
from .models import Repository

admin.site.register(UserName)
admin.site.register(Repository)
