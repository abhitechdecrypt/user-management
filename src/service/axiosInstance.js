import * as service from './API_CONSTANT';
import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: service.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
})
axiosInstance.interceptors.request.use(
    config => {
        // Do something before request is sent
        console.log("I am in the middleware of the request instance");
        return config;
    },
    error => {
        // Do something with request error
        console.error('Request error: ', error);
        Promise.reject(error);
    }
)

// Response interceptor for handling responses, error responses, etc.
axiosInstance.interceptors.response.use(
    response => {
      // Handle successful responses
      console.log('Response: MiddleWare::', response.data);
      return response;
    },
    error => {
      // Handle response errors
      console.error('Response error: ', error);
      return Promise.reject(error);
    }
  );

  export default axiosInstance;