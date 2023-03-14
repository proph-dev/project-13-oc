import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useLogin } from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import './sign.css';

export const Sign = () => {
    const { login, hasError } = useLogin();
    const token = useSelector(state => state.user.token);

    const [userInputs, setUserInputs] = useState({
      email: "",
      password: "",
    });
    const [submitError, setSubmitError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      if(token.length > 0) {
        navigate('/user');
      }
    }, [token]);

    const handleInputChange = (event) => {
      const inputName = event.target.id;
        setUserInputs({
        ...userInputs,
        [inputName]: event.target.value,
      });
      setSubmitError(false);
    };

    const handleLoginFormSubmit = async (event) => {
      event.preventDefault();
    
      try {
        // Appeler la fonction de connexion
        await login(userInputs.email, userInputs.password);

        // Réinitialiser les inputs
        setUserInputs({
          email: "",
          password: "",
        });

        // Réinitialiser les erreurs
        setSubmitError(false);
      } catch (error) {
        // Afficher l'erreur dans la console
        console.log(error);
      
        // Afficher une erreur à l'utilisateur
        setSubmitError(true);
      }
    };

    return (
      <section className="sign-in">
          <div className="content">
              <h1>Sign in</h1>
              <form onSubmit={handleLoginFormSubmit}>
                  <label htmlFor="">Email</label>
                  <input type="text" id="email" value={ userInputs.email } onChange={handleInputChange} required />
                  <label htmlFor="">Password</label>
                  <input type="password" id="password" value={ userInputs.password } onChange={handleInputChange} required />
                  <div className="remember">
                      <input type="checkbox" name="remember" id="remember" />
                      <label htmlFor="remember">Remember me</label>
                  </div>

                  {submitError && <p>Une erreur est survenue</p>}
                  <button type="submit">Sign in</button>
              </form>
          </div>
      </section>
    )
}

export default Sign;