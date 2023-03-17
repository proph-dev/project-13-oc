import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useAuth } from '../hooks/useAuth';

// base url
const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const useProfile = () => {
  const [hasError, setHasError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const token = useSelector(state => state.user.token);

  const profile = async () => {
    try {
      const response = await api.post('/api/v1/user/profile', null, {
        headers: { Authorization: `Bearer ${token}`}
      });
      const { firstName, lastName } = response.data.body;
      setFirstName(firstName);
      setLastName(lastName);
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  };

  return {
    profile,
    firstName,
    lastName,
    hasError
  }
}