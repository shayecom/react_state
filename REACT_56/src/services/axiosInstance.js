import axios from 'axios';

const url = new URL("https://jsonplaceholder.typicode.com/comments");

export const axiosConfig = {
    baseURL: url.toString(),
}

axios.defaults.withCredentials = false;
export const axiosInstance = axios.create(axiosConfig);
