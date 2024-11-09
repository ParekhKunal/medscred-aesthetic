// src/api/auth.js
import api from '../config/apiConfig';

export const login = async (phoneNumber, password) => {
    try {
        const response = await api.post('/auth/login', { email:'kunal@medscred.com', password:'12345678' });
        
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Login failed. Please try again.';
    }
};
