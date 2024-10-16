import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigations from "./components/Navigations";
import SingleBook from "./components/SingleBook";
import "./index.css";

function App() {
  const [token, setToken] = useState(null);

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
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Books/:id" element={<SingleBook />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
