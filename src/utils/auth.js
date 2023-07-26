export const BASE_URL = "localhost:3000";//"https://api.natalie.fr.to"

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
}

export const signup = (email, password, username) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
    })
        .then(
            checkResponse
        )
        .then((res) => {
            return res;
        })
}

export const signin = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkResponse)
        .then((data) => {
            if (data.token) {
                localStorage.setItem("jwt", data.token);
                return data;
            } else {
                return;
            }
        })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(checkResponse)
        .then(data => data)
}
