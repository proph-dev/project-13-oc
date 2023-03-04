import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogin } from '../../hooks/useLogin';
import './sign.css';

export const Sign = () => {
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const [userInputs, setUserInputs] = useState({
        email: "",
        password: "",
      });
      const [formIsSubmited, setFormIsSubmited] = useState(false);
      const [submitError, setSubmitError] = useState(false);
    
      const handleInputChange = (event) => {
        const inputName = event.target.id;
    
        setUserInputs({
          ...userInputs,
          [inputName]: event.target.value,
        });
        setSubmitError(false);
      };
    
      const handleLoginFormSubmit = (event) => {
        event.preventDefault();
    
        setFormIsSubmited(true);
      };

    return (
        <section className="sign-in">
            <div className="content">
                <h1>Sign in</h1>
                <form onSubmit={handleLoginFormSubmit}>
                    <label htmlFor="">Username</label>
                    <input type="text" required onChange={handleInputChange} />

                    <label htmlFor="">Password</label>
                    <input type="password" required onChange={handleInputChange} />

                    <div className="remember">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <input type="submit" value="Sign in" />
                </form>
            </div>
        </section>
    )
}

export default Sign;