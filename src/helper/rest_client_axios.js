import axios from "axios";

const restClient = axios.create({
  baseURL: 'https://beach-volleyball-devs.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    'x-rapidapi-key': import.meta.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.REACT_APP_RAPIDAPI_HOST
  }
});

export default restClient;