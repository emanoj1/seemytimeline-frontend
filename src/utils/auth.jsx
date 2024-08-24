// This file contains utility functions related to authentication, such as handling login, logout, registration, and token management.

import { postRequest } from './api';

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await postRequest('/auth/login', credentials);
    localStorage.setItem('auth-token', response.token);
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await postRequest('/auth/register', userData);
    localStorage.setItem('auth-token', response.token);
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

// Function to log out the user
export const logoutUser = () => {
  localStorage.removeItem('auth-token');
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('auth-token');
  return !!token;
};
