import React, { useState } from 'react';
import { updatePost } from '../api';

const UpdatePostForm = ({ post }) => {
  const [postData, setPostData] = useState(post);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = await updatePost(postData.id, postData);
      if (updatedPost) {
        console.log('Должность успешно обновлена:', updatedPost);
      } else {
        setError('Ошибка при обновлении должности');
      }
    } catch (error) {
      console.error('Ошибка при обновлении должности:', error);
      setError('Ошибка при обновлении должности');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
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
      <button type="submit">Изменить должность</button>
    </form>
  );
};

export default UpdatePostForm;