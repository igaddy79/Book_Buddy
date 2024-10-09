

const cohortName = "2406-FTB-MT-WEB-PT";
const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/${cohortName}`;
/*TODO Books /Get */


const fetchAllBooks = async () => {
    try {
        const response = await fetch(`${API_URL}/books`);
        const result = await response.json();
        return result.data.books
    } catch (error) {
      console.error("There was an error fetching all books", error);
    }
};
export { fetchAllBooks };
