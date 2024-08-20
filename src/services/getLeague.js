import { useEffect } from "react";
import useAxios from "../hooks/use-axios";

export default function getLeague() {
    let { useData, isLoader, useError, fetchData } = useAxios({ method: 'GET', url: 'leagues', params : {country :'Brazil' ,code :'BR'}});

    useEffect(() => {
        fetchData();
    }, []);

    return { useData, isLoader, useError };


}
