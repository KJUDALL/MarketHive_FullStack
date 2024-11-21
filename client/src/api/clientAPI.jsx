// Manage API interactions
// Handle communication between frontend & backend
import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'https://api.example.com';

// Function to handle GET requests
export const get = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
};

// Function to handle POST requests
export const post = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
};

// Function to handle PUT requests
export const put = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('PUT request failed:', error);
    throw error;
  }
};

// Function to handle DELETE requests
export const del = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('DELETE request failed:', error);
    throw error;
  }
};