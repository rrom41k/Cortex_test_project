# Используем базовый образ Python
FROM python:3.11.1

# Установка переменной окружения для запуска Python в режиме не буферизированного вывода
ENV PYTHONUNBUFFERED 1

# Создание директории приложения и установка рабочей директории в нее
RUN mkdir /django_rest_api
WORKDIR /django_rest_api

# Копирование зависимостей и установка их через pip
COPY requirements.txt /django_rest_api/
RUN pip install --no-cache-dir -r requirements.txt

# Копирование всего содержимого текущей директории в контейнер в директорию /django_rest_api/
COPY . /django_rest_api/

# Команда для запуска Django сервера
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]