// src/config/apiConfig.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.medscred.com/api/v1',
});

export default api;
