// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/users', // ✅ Matches your backend base path
  headers: { 'Content-Type': 'application/json' },
});

// These paths are now relative to /api/users
export const registerUser = async (userData) => {
    const response = await API.post('/register', userData);
    console.log('Register Response:', response);
    return response;
  };
  
  export const loginUser = async (credentials) => {
    const response = await API.post('/login', credentials);
    console.log('Login Response:', response);
    return response;
  };
  