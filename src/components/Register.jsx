import { useState } from "react";


const Register = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (event) => {
    event.preventDefault();

import './loginregister.css';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

};
return (
    <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                required
                name="firstName"
                id="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={(event) => setFirstName(event.targetValue)}
                />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                required
                name="lastName"
                id="lastName"
                value={lastName}
                placeholder="last Name"
                onChange={(event) => setLastName(event.targetValue)}
                />
        </div>
        <div className="form-group">
            <label htmlFor="email">email:</label>
            <input
                type="text"
                required
                name="email"
                id="email"
                value={email}
                placeholder="email"
                onChange={(event) => setEmail(event.targetValue)}
                />
        </div>
        <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
                type="text"
                required
                name="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(event) => setPassword(event.targetValue)}
                />
        </div>
        <button type="submit">Register</button>
    </form>
);
};

export default Register;

/* TODO - add your code to create a functional React component that renders a registration form */

  };

  return (
    <div className="login-container">  
      <div className="login-box">  
        <h1 className="login-title">Register</h1>  
        <form onSubmit={handleSubmit} className="login-form">  
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              required
              name="firstName"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}  
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              required
              name="lastName"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}  
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              required
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"  
              required
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)} 
            />
          </div>
          <button type="submit" className="login-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

