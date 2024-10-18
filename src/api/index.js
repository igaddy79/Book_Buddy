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
};
export { fetchAllBooks };

export const registerUser = async (firstname, lastname, email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    //console.log("result", result);
    return result;
  } catch (error) {
    console.error("issue with the /POST registering users", error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
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
  } catch (error) {
    console.error("issue with the /POST login users", error);
  }
};

export const updateBook = async (token, bookId, isCheckingOut) => {
  try {
    const response = await fetch(`${API_URL}/books/${bookId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        available: !isCheckingOut,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error checking out", error);
  }
};

export const getCheckedOutBooks = async (token) => {
  try {
    const response = await fetch(`${API_URL}/reservations`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error getting reserved books", error);
  }
};

export const returnBook = async (token, bookId) => {
  try {
    const response = await fetch(`${API_URL}/reservations/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error returning book", error);
  }
};
