// This file can contain utility functions to make API requests to the backend server.

import axios from 'axios';

// Set up the base URL for your API
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

// Add a request interceptor to include the auth token in headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to handle GET requests
export const getRequest = async (url, params = {}) => {
  try {
    const response = await API.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('API GET request error:', error);
    throw error.response.data;
  }
};

// Function to handle POST requests
export const postRequest = async (url, data) => {
  try {
    const response = await API.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API POST request error:', error);
    throw error.response.data;
  }
};

// Function to handle PUT requests
export const putRequest = async (url, data) => {
  try {
    const response = await API.put(url, data);
    return response.data;
  } catch (error) {
    console.error('API PUT request error:', error);
    throw error.response.data;
  }
};

// Function to handle DELETE requests
export const deleteRequest = async (url) => {
  try {
    const response = await API.delete(url);
    return response.data;
  } catch (error) {
    console.error('API DELETE request error:', error);
    throw error.response.data;
  }
};
