import { useEffect } from "react";
import useAxios from "../hooks/use-axios";

export default function getPlayers() {
    let { useData, isLoader, useError, fetchData } = useAxios({ method: 'GET', url: 'players', params: { season: '2023', league:'73' } });

    useEffect(() => {
        fetchData();
    }, []);

    return { useData, isLoader, useError };


}
