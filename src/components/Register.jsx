import { useState } from "react";
import './loginregister.css';
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";


const Register = ({ setToken }) => {
 const [firstname, setFirstName] = useState("");
 const [lastname, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate()


 const handleSubmit = async (event) => {
   event.preventDefault();
   const register = await registerUser(firstname, lastname, email, password);
   setToken(register.token)
   setFirstName("");
   setLastName("");
   setEmail("");
   setPassword("");
   // localStorage.setItem("authToken", register.token);
   navigate('/account')
 };


 return (
   <div className="login-container">
     <div className="login-box">
       <form onSubmit={handleSubmit}>
         <h1>Register</h1>


         <div className="form-group">
           <label htmlFor="firstName">First Name:</label>
           <input
             type="text"
             required
             name="firstName"
             id="firstName"
             value={firstname}
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
             value={lastname}
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


         <button type="submit">Register</button>
       </form>
     </div>
   </div>
 );
};


export default Register;




