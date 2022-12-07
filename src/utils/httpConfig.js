import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL | 'http://localhost:3000'
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL | 'https://localhost:3000'
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}