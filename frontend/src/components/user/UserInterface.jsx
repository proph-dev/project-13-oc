import React, { useEffect } from "react";
import { useProfile } from '../../hooks/useProfile';
import './user.css';

export const UserInterface = () => {
    const { profile, firstName, lastName, hasError } = useProfile();
    
    useEffect(() => {
        profile();
    }, [profile])

    if(hasError) {
        return <div>Une erreur est survenue</div>
    }

    return (
      <section className="user">
            <h1>Welcome back <span>{ firstName } { lastName }</span></h1>
            <button>Edit Name</button>

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