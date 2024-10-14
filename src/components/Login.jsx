import { useState } from "react";
import './loginregister.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container"> 
      <div className="login-box">  
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              required
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;