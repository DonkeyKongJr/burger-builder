import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-63fa8.firebaseio.com/',
});

export default instance;
