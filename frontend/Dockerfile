# Используем образ Node.js в качестве базового образа
FROM node:14-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /frontend

# Копируем файлы package.json и package-lock.json в директорию /app
COPY package.json package-lock.json ./

# Устанавливаем зависимости приложения
RUN npm install

# Копируем все файлы из текущего каталога (где находится Dockerfile) в директорию /app внутри контейнера
COPY . .

# Экспонируем порт, на котором будет работать React приложение
EXPOSE 3000

# Запускаем приложение React
CMD ["npm", "start"]
