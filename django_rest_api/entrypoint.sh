#!/bin/bash

# Выполнение makemigrations и migrate
python manage.py makemigrations
python manage.py migrate

# Запуск сервера Django
python manage.py runserver 0.0.0.0:8000