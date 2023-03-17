import React, { useState } from "react";
import './user.css';

export const EditName = ({ initialFirstName, initialLastName, onSave, onCancel }) => {
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [error, setError] = useState("");

    const handleSave = () => {
        if (firstName.trim() === "" || lastName.trim() === "") {
            setError("Les champs ne peuvent pas être vides");
        } else {
            setError("");
            onSave(firstName, lastName);
        }
    };

    return (
      <div className="edit-name">
        <div>
            <input
                type="text"
                placeholder={ firstName }
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder={ initialLastName }
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        {error && <div className="error-message">{ error }</div>}
        <div>
            <button onClick={ handleSave }>Save</button>
            <button onClick={ onCancel }>Cancel</button>
        </div>
      </div>
    )
}

export default EditName;