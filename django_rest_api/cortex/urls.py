from django.urls import path
from . import views

# define the urls
urlpatterns = [
    path('posts/', views.posts),
    path('posts/<int:pk>/', views.post_detail),

    path('employees/', views.employees),
    path('employees/<int:pk>/', views.employee_detail),
]