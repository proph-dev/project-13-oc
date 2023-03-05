import React from "react";
import './user.css';

export const UserInterface = () => {
    return (
      <section className="user">
            <h1>Welcome back Tony Jarvis</h1>
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