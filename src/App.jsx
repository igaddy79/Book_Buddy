import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigations from "./components/Navigations";
import SingleBook from "./components/SingleBook";
import Account from "./components/Account";
import "./index.css";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  return (
    <BrowserRouter>
      <>
        <Navigations token={token} setToken={setToken} />
        <h1>
          <img id="logo-image" src={bookLogo} alt="Library Logo" />
          Book Buddy
          <br />
          Library App
        </h1>
        <Routes>
          <Route path="/" element={<Navigate to="/Books" />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Register" element={<Register setToken={setToken} />} />
          <Route path="/Login" element={<Login setToken={setToken} />} />
          <Route path="/Books/:id" element={<SingleBook token={token} />} />
          <Route
            path="/account"
            element={<Account token={token} setToken={setToken} />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
