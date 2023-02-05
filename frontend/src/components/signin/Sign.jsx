import React from "react";
import './sign.css';

export const Sign = () => {
    return (
        <section className="sign-in">
            <div className="content">
                <h1>Sign in</h1>
                <form action="">
                    <label htmlFor="">Username</label>
                    <input type="text" />

                    <label htmlFor="">Password</label>
                    <input type="text" />

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