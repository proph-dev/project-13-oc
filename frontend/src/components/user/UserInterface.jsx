import React, { useState, useEffect } from "react";
import { useProfile } from '../../hooks/useProfile';
import { useEditName } from "../../hooks/useEditName";
import EditName from './EditName';
import './user.css';

export const UserInterface = () => {
    const { profile, firstName, lastName, hasError } = useProfile();
    const { editName, hasError: editError } = useEditName();
    const [isEditingName, setIsEditingName] = useState(false);
    
    useEffect(() => {
        profile();
    }, [profile])

    if(hasError || editError) {
        return <div>Une erreur est survenue</div>
    }

    const handleEditName = (event) => {
        setIsEditingName(true);
    };

    const handleSaveName = async (newFirstName, newLastName) => {
        await editName(newFirstName, newLastName);
        setIsEditingName(false);
    };

    const handleCancelName = () => {
        setIsEditingName(false);
    };

    return (
      <section className="user">
            <h1>
                Welcome back
                {isEditingName ? (
                    <EditName initialFirstName={ firstName } initialLastName={ lastName } onSave={ handleSaveName } onCancel={ handleCancelName } />
                ) : (
                    <span>{ firstName } { lastName }</span>
                )}
            </h1>
            {!isEditingName && <button onClick={ handleEditName }>Edit Name</button>}

            <div className="balance">
                <div>
                    <h3>Argent Bank Checking (x8349)</h3>
                    <p>$2,082.79</p>
                    <span>Available Balance</span>
                </div>
                <button>View transactions</button>
            </div>

            <div className="balance">
                <div>
                    <h3>Argent Bank savings (x6712)</h3>
                    <p>$10,928.42</p>
                    <span>Available Balance</span>
                </div>
                <button>View transactions</button>
            </div>

            <div className="balance">
                <div>
                    <h3>Argent Bank Checking (x8349)</h3>
                    <p>$184.30</p>
                    <span>Current Balance</span>
                </div>
                <button>View transactions</button>
            </div>
      </section>
    )
}

export default UserInterface;