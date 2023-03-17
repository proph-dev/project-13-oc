import { useDispatch } from 'react-redux';
import { setEmail, setToken, setFirstName, setLastName } from '../redux/reducer';

export const useAuth = () => {
  const dispatch = useDispatch();

  const dispatchSetEmail = (email) => {
    dispatch(setEmail(email));
  };

  const dispatchSetToken = (token) => {
    dispatch(setToken(token));
  };

  return {
    dispatchSetEmail,
    dispatchSetToken
  };
};