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
    return response.data;  // Return response.data to get the actual data from the API
  } catch (error) {
    console.error('API POST request error:', error);

    // Ensure you return or throw the error to handle it properly in the calling function
    if (error.response) {
      throw error.response.data;  // Server responded with a status code outside the 2xx range
    } else if (error.request) {
      throw new Error('No response received from the server');  // Request was made, but no response was received
    } else {
      throw new Error(error.message);  // Something else happened while setting up the request
    }
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
