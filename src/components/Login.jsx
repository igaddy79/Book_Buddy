import { useState } from "react";



const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        setEmail("");
        setPassword("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
           
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
            <button type="submit">Login</button>
        </form>
    );
    };
    
    export default Login;
    




