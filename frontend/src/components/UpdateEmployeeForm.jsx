import React, { useState, useEffect } from 'react';
import { updateEmployee, getPosts } from '../api';

const UpdateEmployeeForm = ({ empl }) => {
  const [employeeData, setEmployeeData] = useState(empl);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
      // Получение списка должностей при загрузке компонента
      const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      if (fetchedPosts) {
          setPosts(fetchedPosts);
      }
      };
      fetchPosts();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'post') {
        const selectedPostId = e.target.value;
        setEmployeeData({ ...employeeData, [e.target.name]: selectedPostId });
    } else {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedEmpl = await updateEmployee(employeeData.id, employeeData);
      if (updatedEmpl) {
        console.log('Сотрудник успешно обновлен:', updatedEmpl);
      } else {
        setError('Ошибка при обновлении сотрудника');
      }
    } catch (error) {
      console.error('Ошибка при обновлении сотрудника:', error);
      setError('Ошибка при обновлении сотрудника');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Имя"
            value={employeeData.name}
            onChange={handleChange}
        />
        <input
            type="text"
            name="surname"
            placeholder="Фамилия"
            value={employeeData.surname}
            onChange={handleChange}
        />
        <input
            type="text"
            name="patronymic"
            placeholder="Отчество"
            value={employeeData.patronymic}
            onChange={handleChange}
        />
        <select
            name="post"
            value={employeeData.post}
            onChange={handleChange}
        >
            <option value="">Выберите должность</option>
            {posts.map((post) => (
            <option key={post.id} value={post.id}>{post.name}</option>
            ))}
        </select>
        <input
            type="date"
            name="date_of_employment"
            placeholder="Дата приема на работу"
            value={employeeData.date_of_employment}
            onChange={handleChange}
        />
        {error && <p>{error}</p>}
        <button type="submit">Изменить сотрудника</button>
    </form>
  );
};

export default UpdateEmployeeForm;