class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getSearchedArticles(searchWord) {
    const currentDate = new Date();
    const pastDate = new Date(new Date().setDate(new Date().getDate() - 7));;
    return fetch(`${this._baseUrl}/everything?q=${searchWord}&apiKey=${this._apiKey}&from=${pastDate}&to=${currentDate}&pageSize=100`)
      .then(this._checkResponse);
  }
}

export const newsApi = new NewsApi({
  baseUrl: "https://newsapi.org/v2",
  apiKey: "8b6a35e7b7c1456db4c96ab984919f90"
});
