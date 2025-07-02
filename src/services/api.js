import axios from 'axios';

const API = axios.create({
  // baseURL: 'https://pharma-ecommerce.onrender.com/api',
//  baseURL: 'http://localhost:5000/api'
 baseURL: 'https://api.arogyarx.com/api'
});

API.interceptors.request.use((config) => {
  // Try both tokens: prefer user token
  const userToken = localStorage.getItem('accessToken');


  config.headers.Authorization = `Bearer ${userToken}`;

  return config;
});

export default API;