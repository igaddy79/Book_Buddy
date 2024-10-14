import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import bookLogo from "./assets/books.png";
import Books from './components/Books';


function App() {
 
  return (  
    <BrowserRouter>
    <>
      <h1>
        <img id="logo-image" src={bookLogo} alt="Library Logo" />
        Library App
      </h1>
    <Routes>
      <Route path="/" element={<Navigate to="/Books" />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Books/:id" element={<h1>Single Books</h1>} />  
    </Routes>
  </>
  </BrowserRouter>
  );
}

export default App;
