import React, { useState } from "react";
import App from "App"




export function Characters(props) {
    const {chosenOne} = props;


    return 
    <div>
        <h2>{chosenOne.name}</h2>
        <p>Gender: {chosenOne.gender}</p>
        <p>Birth Year: {chosenOne.birth_year}</p>
        <p>Height: {chosenOne.height}</p>
        <p>Weight: {chosenOne.mass}</p>
        <p>Homeworld: {chosenOne[homeworld].name}</p>
    </div>
}
