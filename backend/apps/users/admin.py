from dataclasses import fields
from django.contrib import admin
from jmespath import search
from .models import User

@admin.register(User)
class UserModel(admin.ModelAdmin):
    fields = ['name', 'email', 'token', 'token_expires']
    list_filter = []
    list_display = fields
    search_fields = ['name', 'email']
# Register your models here.
