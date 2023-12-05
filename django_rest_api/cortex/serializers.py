from rest_framework import routers,serializers,viewsets
from .models import Post, Employee


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'name', 'description']


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'name', 'surname', 'patronymic', 'post', 'date_of_employment']