from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=15, unique=True)
    address = models.TextField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name
