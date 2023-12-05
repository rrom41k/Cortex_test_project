from django.db import models

# Create your models here.
class Post(models.Model):
    name = models.CharField(max_length=40, null=False)
    description = models.TextField(blank=True)

    def __str__(self):
        return f'{self.name}'


class Employee(models.Model):
    surname = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255, blank=True)
    post = models.ForeignKey('Post', on_delete=models.PROTECT, null=False)
    date_of_employment = models.DateField()

    def __str__(self):
        return f'{self.surname} {self.name} {self.patronymic}'
