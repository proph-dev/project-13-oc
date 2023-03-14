import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

// base url
const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const useLogin = () => {
  const [hasError, setHasError] = useState(false);
  const { dispatchSetEmail, dispatchSetToken } = useAuth();

  const login = async (email, password) => {
    try {
      const response = await api.post('/api/v1/user/login', {
        email,
        password
      });
      dispatchSetEmail(email);
      dispatchSetToken(response.data.body.token);
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