/* TODO - add your code to create a functional React component that renders details for a 
single book. Fetch the book data from the provided API. You may consider conditionally 
rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";
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

  function handleClick() {
    setIsAvailable(false);
    updateBook(token, id, true);
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

            {token && book.available && (
              <button onClick={handleClick}>Checkout</button>
            )}

            {!book.available && <p>This book is checked out.</p>}

            {/* <Link Link to="../../" className="link">
             Go Back
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBook;
