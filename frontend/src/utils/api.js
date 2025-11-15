import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: `${API_URL}/api`,
});

// Categories
export const getCategories = () => api.get('/categories');
export const getCategoryBySlug = (slug) => api.get(`/categories/${slug}`);

// Questions
export const getQuestionsByCategory = (categoryId, limit = 10, difficulty = null) => {
  const params = new URLSearchParams({ limit: limit.toString() });
  if (difficulty) {
    params.append('difficulty', difficulty);
  }
  return api.get(`/questions/category/${categoryId}?${params.toString()}`);
};

export const getRandomQuestions = (limit = 10, difficulty = null) => {
  const params = new URLSearchParams({ limit: limit.toString() });
  if (difficulty) {
    params.append('difficulty', difficulty);
  }
  return api.get(`/questions/random?${params.toString()}`);
};

// Admin
export const adminLogin = (credentials) => api.post('/admin/login', credentials);
export const createCategory = (data, token) => 
  api.post('/admin/categories', data, {
    headers: { Authorization: `Bearer ${token}` }
  });
export const createQuestion = (data, token) => 
  api.post('/admin/questions', data, {
    headers: { Authorization: `Bearer ${token}` }
  });