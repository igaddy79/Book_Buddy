import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBooks } from "../api/index";
import './Books.css';


export default function Books() {
 const [books, setBooks] = useState([]);


 useEffect(() => {
   async function getAllBooks() {
     try {
       const booksData = await fetchAllBooks();
       setBooks(booksData || []);
     } catch (error) {
       console.error("Could not fetch all books:", error);
     }
   }


   getAllBooks();
 }, []);






 return (
   <>
     {books.length > 0 ? (
       <div className="books-container">
         <h2 className="header">ALL BOOKS</h2>
         <br />
         {books.map((book) => (
           <div className="book-box" key={book.id}>
             <h4>{book.title}</h4>
             {book.coverimage && (
               <img
                 src={book.coverimage}
                 alt={`Cover of ${book.title}`}
                 className="book-image"
               />
             )}
             <Link to={`/Books/${book.id}`}>View Book Details</Link>
           </div>
         ))}
       </div>
     ) : (
       <p>Loading All Books...</p>
     )}
   </>
 );
}

