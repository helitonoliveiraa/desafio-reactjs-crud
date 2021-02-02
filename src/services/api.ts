import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-go-restaurant.herokuapp.com/',
});

export default api;
