import React from "react";
import './reinsurance.css';

export const Field = ({ title, text, img }) => {
    return (
        <div>
            <img src={ require(`../../assets/img/${img}`) } alt={ text } />
            <h2>{ title }</h2>
            <p>{ text }</p>
        </div>
    )
}

export default Field;