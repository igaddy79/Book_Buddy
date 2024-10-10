/* TODO - add your code to create a functional React component that renders details for a 
single book. Fetch the book data from the provided API. You may consider conditionally 
rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./SingleBook.css";

function SingleBook() {
  const [book, setBook] = useState(null);
  const id = useParams().id;
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
  useEffect(() => {
    async function getBook() {
      try {
        const response = await fetch(`${API_URL}/books/${id}`);
        const data = await response.json();
        setBook(data.book);
      } catch (error) {
        console.log("Error fetching book", error);
      }
    }
    getBook();
  }, []);
  if (!book) {
    return (
      <div>
        <h1>Loading Book...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{book.title}</h1>
        <img src={book.coverimage} alt="" className="bookCover" />
        <p>Author: {book.author}</p>
        <p>{book.description}</p>
      </div>
    );
  }
}

export default SingleBook;
