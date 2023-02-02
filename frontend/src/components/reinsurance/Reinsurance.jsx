import React from "react";
import Field from './Field';
import fields from './fields.json';
import './reinsurance.css';

export const Reinsurance = () => {
    return (
        <div className="reinsurance">
            {fields.map((field) => {
                return (
                    <div className="field" key={ field.id }>
                        <Field title={ field.title } text={ field.text } img={ field.img } />
                    </div>
                )
            })}
        </div>
    )
}

export default Reinsurance;