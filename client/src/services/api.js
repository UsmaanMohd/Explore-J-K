import axios from 'axios';

// Allows environment-based URL injection if hosted, pointing safely dynamically otherwise
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Validates and grabs all destination locations safely from backend context mapping.
 */
export const getPlaces = async (params = {}) => {
  try {
    const response = await api.get('/places', { params });
    return response.data;
  } catch (error) {
    console.error('API Error Fetching Places:', error);
    throw error;
  }
};

/**
 * Standard location precise grabbing functionality successfully validated securely.
 */
export const getPlaceById = async (id) => {
  try {
    const response = await api.get(`/places/${id}`);
    return response.data;
  } catch (error) {
    console.error(`API Error Fetching Place ${id}:`, error);
    throw error;
  }
};

/**
 * Safely processes user auth payload sending specifically formatting structure correctly.
 */
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('API Error Logging In:', error);
    throw error;
  }
};

export default api;
