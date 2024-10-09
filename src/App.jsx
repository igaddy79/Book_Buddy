import { BrowserRouter, Route, Routes } from 'react-router-dom';
import bookLogo from "./assets/books.png";

function App() {
  // const [token, setToken] = useState(null);

  return (  
    <BrowserRouter>
    <>
      <h1>
        <img id="logo-image" src={bookLogo} alt="Library Logo" />
        Library App
      </h1>
    <Routes>
      <Route path="/" element={<h1>Books</h1>} />
      <Route path="/books" element={<h1>Books</h1>} />
      <Route path="/books/:id" element={<h1>Single Books</h1>} /> 
    </Routes>
  </>
  </BrowserRouter>
  );
}

export default App;
