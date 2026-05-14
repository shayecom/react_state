import axios from 'axios';

// const url = new URL("https://jsonplaceholder.typicode.com/comments");
const baseUrl = "http://localhost:8080";
const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
});
// Method GET, POST, PUT, DELETE, PATCH
export const apiRequest = async ({
                                     method,
                                     path,
                                     params = {},
                                     data = {},
                                     headers = {}
                                 }) => {
    try {
        const response = await axiosInstance({
            method,
            url: path,
            params,
            data,
            headers
        })
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }

}
// export const axiosConfig = {
//     baseURL: url.toString(),
// }
//
// axios.defaults.withCredentials = false;
// export const axiosInstance = axios.create(axiosConfig);
