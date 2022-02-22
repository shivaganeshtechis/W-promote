from django.db import models
# from apps.products.models import Product
from apps.users.models import User
from django.db.models.deletion import CASCADE
# Create your models here.

class Favourite(models.Model):
    class Meta(object):
        db_table = 'favourite'

    patent_id = models.CharField(
        'Patent ID', blank=False, null=False, db_index=True, max_length=120
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE,  blank=False, null=True, db_index=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )