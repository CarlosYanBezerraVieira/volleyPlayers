import axios from "axios";

const restClient = axios.create({
  baseURL: 'https://beach-volleyball-devs.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.RAPIDAPI_HOST
  }
});

export default restClient;