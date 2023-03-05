import React, { useState } from 'react';
import axios from 'axios';

// base url
const api = axios.create({
    baseURL: "http://localhost:3000"
  });
  
  export const useLogin = () => {
    const [hasError, setHasError] = useState(false);
  
    const login = async (email, password) => {
      try {
        const response = await api.post('/api/v1/user/login', {
          email,
          password
        });
        localStorage.setItem('token', response.data.token);
        window.location.replace("/");
      } catch (error) {
        setHasError(true);
        console.log(error);
      }
    };
  
    return {
      login,
      hasError
    }
  }