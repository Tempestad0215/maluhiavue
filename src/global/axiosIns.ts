import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    timeout: 1500,
    headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
});