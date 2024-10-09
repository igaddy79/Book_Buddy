import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBooks } from "../api/index";

export default function Books() {
  const [books, setBooks] = useState([]);
        
  useEffect(()=>{

    async function getAllBooks() {
      try {
        const booksData = await fetchAllBooks();
        console.log("Fetched Books Data:", booksData);
        setBooks(booksData || []);
      
      }catch (error) {
        console.error("oh no i couldnt fetch allplayers:", error);
      }
    }

    getAllBooks();
      //console.log("Hello");

}, []);

    return (
        <>
        {books.length > 0 ? (
          <>
            <div>Available Books</div>
            {books.map((book) => ( // Change Books to book here
              <div key={book.id}> 
                <h4>{book.title}</h4>
                <Link to={`/Books/${book.id}`}>View Details</Link> 
              </div>
            ))}
          </>
        ) : (
          <p>Loading books...</p>
        )}
      </>
    );
  }



/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */