/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */



import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const baseURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

function Account({ token, setToken }) {
  const [account, setAccount] = useState(token);
  const navigate = useNavigate();

  useEffect(() => { // first thing that happens
    return () => {
      fetch(`${baseURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setAccount(result);
        })
        .catch(console.error);
    };
  }, [token]); // dependency array. if empty we run it once. if occupied, info changes on refresh

  function logout() {
    localStorage.removeItem("authToken"); // going in to browsers local storage to remove token 
    setToken(null) // updating out STATE to nothing because we want to end the session
    navigate("/"); // after removing token, redirect to homepage
  }

  function returnbook(id) { // deleting  a "post" on instagram
    fetch(`${baseURL}/reservations/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/reservations");
      })
      .catch(console.error);
  }
// hello ...
  if (!token) {
    return <Navigate to="/login" />;
  }

 

  return (
    <div>
      <h2>Account Details</h2>
      <p>First Name: {account?.firstname}</p>
      <p>Last Name: {account?.lastname}</p>
      <p>Email: {account?.email}</p>
      <button onClick={logout}>Logout</button>
      <h2>Books Checked Out</h2>
      <ul>
        {account?.books?.map((book) => (
          <li key={book.id}>{book.title} <button onClick={()=>returnbook(book.id)}>Return Book</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Account;
