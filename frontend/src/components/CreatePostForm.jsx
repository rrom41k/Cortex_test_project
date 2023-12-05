import React, { useState } from 'react';
import { createPost } from '../api'; // Путь к вашим функциям API

const CreatePostForm = () => {
  const [postData, setPostData] = useState({ name: '', description: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Проверка валидности данных перед отправкой
    if (!postData.name) {
        setError('Пожалуйста, заполните поле название');
        return;
    }
    setError('');

    // Отправка данных
    const createdPost = await createPost(postData);
    if (createdPost) {
        // Успешно создан
        setPostData({ name: '', description: '' }); // Сброс данных формы
    } else {
        // Ошибка при создании
        setError('Ошибка при создании поста');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Название"
        value={postData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Описание"
        value={postData.description}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <button>Добавить пост</button>
    </form>
  );
};

export default CreatePostForm;