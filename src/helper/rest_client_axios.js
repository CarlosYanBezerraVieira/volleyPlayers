import axios from "axios";

const restClient = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  timeout: 1000,
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
  }
});

export default restClient;