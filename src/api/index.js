

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