const { REACT_APP_BASE_URL } = process.env;

export class UserApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers
  }
  login(props) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(props),
    }).then((res) => this._getResponseData(res));
  }
  register(props) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(props),
    }).then((res) => this._getResponseData(res));
  }
  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`, ...this._headers },
    }).then((res) => this._getResponseData(res));
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }
}

export const userApi = new UserApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
