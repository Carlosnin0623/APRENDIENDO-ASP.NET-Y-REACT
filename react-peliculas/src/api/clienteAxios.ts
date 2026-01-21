import axios from "axios";

const clienteAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'Application/json'
    }
});

export default clienteAPI;