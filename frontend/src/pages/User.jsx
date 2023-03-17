import React, { useEffect } from 'react';
import UserInterface from '../components/user/UserInterface';
import { useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

function User() {
  const token = useSelector(state => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if(token.length === 0) {
      navigate('/sign-in');
    }
  }, [token]);

  return (
    <main>
        <UserInterface />
    </main>
  );
}

export default User;