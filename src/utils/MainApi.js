class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error ${res.status}`);
    }

    getUserInfo() {
        return this._request(this._baseUrl + "/users/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type": "application/json",
            },
        });
    }

    getSavedArticles() {
        return this._request(this._baseUrl + "/articles", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type": "application/json",
            },
        });
    }

    createArticle(article) {
        return this._request(this._baseUrl + "/articles", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        });
    }

    deleteArticle(articleId) {
        return this._request(this._baseUrl + "/articles/" + articleId, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type": "application/json",
            },
        });
    }
}

export const mainApi = new MainApi({
    baseUrl: "https://api.natalie.fr.to",
}); 