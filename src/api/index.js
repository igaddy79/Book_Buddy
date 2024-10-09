


const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;
/*TODO Books /Get */


const fetchAllBooks = async () => {
    try {
        const response = await fetch(`${API_URL}/books`);
        const result = await response.json();
        // console.log("API Response:", result); 
        return Array.isArray(result.books) ? result.books : []; 
    } catch (error) {
    //   console.error("There was an error fetching all books", error);
      return []; 
    }
}
export { fetchAllBooks };
