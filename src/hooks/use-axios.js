import restClient from "../helper/rest_client_axios";
import { useState } from "react";

export default function useAxios(configParams) {

    const { method, url, params = {}, data = {} } = configParams;
    const [useData, setData] = useState([]);
    const [useError, setError] = useState('');
    const [isLoader, setIsLoader] = useState(true);

    const fetchData = async () => {
        try {
            let response;
            
            if (method.toLowerCase() === 'get') {
                response = await restClient.get(url, { params });
            } else {
                response = await restClient[method.toLowerCase()](url, data, { params });
            }

            setData(response.data);

        } catch (error) {
            setError(error.message || 'An error occurred');
        } finally {
            setIsLoader(false);
        }
    }

    return { useData, useError, isLoader, fetchData };
}
