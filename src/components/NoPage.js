import React from "react";
import { useHistory } from "react-router-dom";

export default function Nopage(){
    const history=useHistory()
    return(
        <div>
            <p>Hi you entered wrong place</p>
            <button onClick={()=>history.push("/")}>Dashboard</button>
        </div>
    )
}