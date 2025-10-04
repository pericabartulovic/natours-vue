import axios from 'axios';
import { API_URL } from '@/config';

const api = axios.create({
  // baseURL: 'https://natours-chb9.onrender.com/api/v1',
  baseURL: API_URL,
  withCredentials: true // if you're dealing with cookies
});

export default api;