import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

// base url
const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const useEditName = () => {
  const [hasError, setHasError] = useState(false);
  const token = useSelector(state => state.user.token);

  const editName = async (newFirstName, newLastName) => {
    try {
      const response = await api.put('/api/v1/user/profile', {
        firstName: newFirstName,
        lastName: newLastName
      }, {
        headers: { Authorization: `Bearer ${token}`}
      });
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  };

  return {
    editName,
    hasError
  }
}