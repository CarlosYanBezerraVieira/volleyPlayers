import restClient from "../helper/rest_client_axios";
import { useState } from "react";

export default function useAxios(configParams) {

    const { method, url, params = {}, data = {} } = configParams;
    const [useData, setData] = useState([])
    const [useError, setError] = useState('')
    const [isLoader, setIsLoader] = useState(true)


    const fetchData = async () => {
        try {
         
            let response = await restClient[method.toLowerCase()](url, JSON.stringify({ ...params, ...data }))
            setData(response.data)
         

        } catch (error) {
            setError(error)
        } finally {
            setIsLoader(false)
        }
    }
    return { useData, useError, isLoader, fetchData }

}