import axios from 'axios';

// URL для запросов к API Django
const API_URL = 'http://localhost:8000/api/';

// Функция для получения всех должностей
export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}posts/`);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения должности:', error);
    return null;
  }
};

// Функция для получения должности по id
export const getPostId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}posts/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения должности:', error);
    return null;
  }
};

// Функция для создания нового поста
export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${API_URL}posts/`, postData);
    return response.data;
  } catch (error) {
    console.error('Ошибка создания должности:', error);
    return null;
  }
};

// Функция для обновления поста по ID
export const updatePost = async (postId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}posts/${postId}/`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Ошибка обновления поста:', error);
    return null;
  }
};

// Функция для удаления поста по ID
export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_URL}posts/${postId}/`);
    return true;
  } catch (error) {
    console.error('Ошибка удаления поста:', error);
    return false;
  }
};

// Функция для получения всех постов
export const getEmployee = async () => {
    try {
      const response = await axios.get(`${API_URL}employees/`);
      return response.data;
    } catch (error) {
      console.error('Ошибка получения сотрудников:', error);
      return null;
    }
  };
  
  // Функция для создания нового сотрудника
  export const createEmployee = async (emplData) => {
    try {
      console.log(emplData)
      const response = await axios.post(`${API_URL}employees/`, emplData);
      return response.data;
    } catch (error) {
      console.error('Ошибка создания сотрудников:', error);
      return null;
    }
  };
  
  // Функция для обновления сотрудника по ID
  export const updateEmployee = async (employeeId, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}employees/${employeeId}/`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Ошибка обновления сотрудника:', error);
      return null;
    }
  };
  
  // Функция для удаления сотрудника по ID
  export const deleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`${API_URL}employees/${employeeId}/`);
      return true;
    } catch (error) {
      console.error('Ошибка удаления сотрудника:', error);
      return false;
    }
  };
  