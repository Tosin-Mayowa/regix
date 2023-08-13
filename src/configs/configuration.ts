import axios from "axios";


export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export const refreshRequestInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const requestClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 30000,
  headers: {
    Accept: "application/json",
    //'Authorization': 'Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc'
  },
  withCredentials: false,
});
export default requestClient;
