import axios from "axios";

const APP_ID = import.meta.env.VITE_APP_EDAMAM_ID;
const API_KEY = import.meta.env.VITE_APP_EDAMAM_KEY;

export const instance = axios.create({
    baseURL: "https://api.edamam.com/",
    params: {
        app_id: APP_ID,
        app_key: API_KEY,
    },
    headers: {
        "Edamam-Account-User": "kingsher007",
    },
});