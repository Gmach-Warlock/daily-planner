import Tile from "./Tile/Tile";
import './TileList.css'
import { useContext, useState } from "react";
import { contactsContext } from "../../../App";

export default function TileList({arrayToIterate}) {

    const [contacts, setContacts] = useContext(contactsContext);

    const editTrackInfo = () => {

    }

 

    return (
        <div>
        {arrayToIterate.map((tile, index) => {
            const {name, ...description } = tile;
            return <Tile key={`${name}${index}`} name={name} description={description}/>
        })}
        </div>
    );

    

}

/*

    return (
        <div>
        {array.map((tile, index) => {
            const {name, ...description } = tile;
            return <Tile key={`${name}${index}`} name={name} description={description}/>
        })}
        </div>
    );

  */