import React, { useState, useEffect } from 'react';
import { createEmployee, getPosts } from '../api'; // Путь к вашим функциям API

const CreateEmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        post: '', 
        date_of_employment: '',
    });
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
        if (
        !employeeData.name ||
        !employeeData.surname ||
        !employeeData.post ||
        !employeeData.date_of_employment
        ) {
        setError('Пожалуйста, заполните все обязательные поля');
        return;
        }
        setError('');

        const createdEmployee = await createEmployee(employeeData);
        if (createdEmployee) {
        // Успешно создан
        console.log("Сотрудник успешно добавлен")
        } else {
        // Ошибка при создании
        setError('Ошибка при создании сотрудника');
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
            <button type="submit">Создать сотрудника</button>
        </form>
    );
};

export default CreateEmployeeForm;