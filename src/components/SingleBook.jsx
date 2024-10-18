/* TODO - add your code to create a functional React component that renders details for a
single book. Fetch the book data from the provided API. You may consider conditionally
rendering a 'Checkout' button for logged in users. */


import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./SingleBook.css";
import { Link } from "react-router-dom";
import { updateBook } from "../api";


function SingleBook({ token }) {
 const [book, setBook] = useState(null);
 const [isAvailable, setIsAvailable] = useState(false);
 const id = useParams().id;
 const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
 const navigate = useNavigate()


 useEffect(() => {
   async function getBook() {
     try {
       const response = await fetch(`${API_URL}/books/${id}`);
       const data = await response.json();
       setBook(data.book);
       setIsAvailable(data.book.available);
     } catch (error) {
       console.log("Error fetching book", error);
     }
   }
   getBook();
 }, [isAvailable]);


 // function handleClick() {
 //   setIsAvailable(true);
 //   updateBook(token, id, true);
 // }
 function checkoutbook() {
   fetch(API_URL + "/books/" + id, {
     headers: {
       "Content-Type": "application/json",
       Authorization: "Bearer " + token,
     },
     method: "PATCH",
     body: JSON.stringify({
       available: false,
     }),
   })
     .then((response) => response.json())
     .then((result) => {
       console.log(result);
       setIsAvailable(false)
       navigate("/account");
     })
     .catch(console.error);
 }


 if (!book) {
   return (
     <div>
       <h1>Loading Book...</h1>
     </div>
   );
 } else {
   return (
     <div>
       <div className="book">
         <div className="bookCover">
           <img src={book.coverimage} alt="" />
         </div>
         <h1>{book.title}</h1>
         <hr />
         <div className="details">
           <p>Author: {book.author}</p>
           <p>{book.description}</p>
           {/* // Below is called a TERNARY OPERATOR aka an inline "if condition" for react */}
           {token && book.available ? ( // IF token AND book is availble,
             <button onClick={checkoutbook}>Checkout</button> // display BUTTTON
           ) : ( // ELSE,
             <p><b>This book is checked out.</b></p> // display p tag
           )}
         </div>
       </div>
     </div>
   );
 }
}


export default SingleBook;




