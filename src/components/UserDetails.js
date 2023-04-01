import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";
import { AppState } from "../Context/AppProvider";

export function UserDetails(){
    const {user}=AppState();
    const {id}=useParams();
    
    const person=user[id]
    return(
        <BaseApp title="User Detail">
            <div className="user-content">
                    <div className="user-card">
                        <h1>{person.name}</h1>
                        <p>Batch : {person.batch}</p>
                        <p>Email : {person.email}</p>
                        <p>Experience : {person.experience}</p>
                       
                    </div>
            </div>
        </BaseApp>
    )
}