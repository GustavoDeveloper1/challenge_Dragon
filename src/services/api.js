import Axios from 'axios';
import { getToken } from './auth';


const Api = Axios.create({
    baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/'
})


Api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default Api;