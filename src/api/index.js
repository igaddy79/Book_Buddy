<<<<<<< HEAD



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
=======


const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

export const registerUser = async (firstName, lastName, email, password) => {
    try {
        const response = await fetch(`${API_URL}/api/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
        });
        const result = await response.json();
        return result;
    }   catch (error) {
        console.error("issue with the /POST registering users", error);
    }

};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const result = await response.json();
        return result;
    }   catch (error) {
        console.error("issue with the /POST login users", error);
    }

};

>>>>>>> account
