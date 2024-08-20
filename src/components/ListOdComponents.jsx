import { useEffect } from "react";
import Card from "./Card";
import getPlayers from "../services/getPlayers";
import getLeague from "../services/getLeague";
export default function ListOfComponents() {


    let { isLoader, useData, useError } = getPlayers()
  


    


    return (
        <>
            <Card title="Card title" description="Card description" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTH5hPCIoUwe89nxTVChQo5SmHrooM5CSNQ&s" />

        </>
    )
}