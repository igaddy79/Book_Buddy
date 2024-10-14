import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const baseURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function Books() {
const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetchAllBooks()
}, []);

const fetchAllBooks = async () => {
  try {
      const response = await fetch(`${baseURL}/books`);
      const result = await response.json();
      console.log("API Response:", result); 
      return result; 
  } catch (error) {
      console.error("There was an error fetching all books", error); 
  }
}

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