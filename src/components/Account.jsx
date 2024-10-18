/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */


import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getCheckedOutBooks } from "../api";
import { returnBook } from "../api";


const baseURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";


function Account({ token, setToken }) {
 const [account, setAccount] = useState(token);
 const [books, setBooks] = useState([]);
 const navigate = useNavigate();


 useEffect(() => {
   // first thing that happens
   async function getBooks() {
     const checkedOutBooks = await getCheckedOutBooks(token);
     setBooks(checkedOutBooks.reservation);
   }
   getBooks();
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
   setToken(null); // updating out STATE to nothing because we want to end the session
   navigate("/"); // after removing token, redirect to homepage
 }


 function returnB(book) {
   setBooks(books.filter((b) => b != book));
   returnBook(token, book.id);
 }
 // hello ...
 if (!token) {
   return <Navigate to="/login" />;
 }
 if (!books) {
   return (
     <div>
       <h1>Loading books...</h1>
     </div>
   );
 } else {
   return (
     <div>
       <h2>Account Details</h2>
       <p>First Name: {account?.firstname}</p>
       <p>Last Name: {account?.lastname}</p>
       <p>Email: {account?.email}</p>
       <button onClick={logout}>Logout</button>
       <h2>Books Checked Out</h2>
       <ul>
         {books.map((book) => (
           <li key={book.id}>
             {book.title}{" "}
             <button onClick={() => returnB(book)}>Return Book</button>
           </li>
         ))}
       </ul>
     </div>
   );
 }
}


export default Account;



