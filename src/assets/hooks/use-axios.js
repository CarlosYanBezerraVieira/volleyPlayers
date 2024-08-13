import restClient from "../helper/rest_client_axios";
import { useState, useEffect } from "react";

export default function useAxios(configParams) {
    const [method, url, params = {}, data = {}] = configParams;
    const [useData, setData] = useState([])
    const [useError, setError] = useState(null)
    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await restClient[method.toLowerCase()](url, { ...params, ...data })
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoader(false)
            }
        }
        fetchData()
    }, [])
    return { useData, useError, isLoader }

}