import { useEffect } from 'react';
import axios from 'axios';
import useAuth from './UseAuth';

const useAxiosSecure = () => {
  const { user } = useAuth();
  console.log(user) // যদি দরকার হয়
  const axiosSecure = axios.create({
    baseURL: 'https://gym-base-server.vercel.app/', // তোমার API root
  });

  // Add token in headers (optional)
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
