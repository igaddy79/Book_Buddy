import { useState } from "react";
import './loginregister.css';
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";


const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const login= await loginUser(email, password);
    console.log(login)
    setToken(login.token)
    setEmail("");
    setPassword("");
    navigate("/books")
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              required
              name="email"
              id="email"
              value={email}
              placeholder="email"
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
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
