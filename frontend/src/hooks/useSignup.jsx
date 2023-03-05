import React, { useState } from 'react';
import axios from 'axios';

// base url
const api = axios.create({
  baseURL: "http://localhost:3000"
});

export const useSignUp = () => {
  const [hasError, setHasError] = useState(false)

  const signUp = async (email, pseudo, password) => {
    try {
      await api.post('/api/v1/user/signup', {
        email,
        pseudo,
        password
      });
      window.location.reload();
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  };

  return {
    signUp,
    hasError
  }
}