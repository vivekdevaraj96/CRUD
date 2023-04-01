import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import BaseApp from "../Core/Base";



export default function UserComponent(){
    const {user,setUser}=AppState();
    const history=useHistory()

    const deleteUser=async(idx)=>{
        try{
            const response = await fetch(`https://6411f5f1f9fe8122ae18e9d8.mockapi.io/user/${idx}`,{
                method:"Delete"
            })
            const data = await response.json();
            console.log("after deleted data", data)
            const alterList=user.filter((per)=>per.id !== idx)
            setUser(alterList)
            if(!data){
                console.log("couldn't delete data")
            }
        }catch(error){
            console.log(error)
        }
       
    }
    return(
        <BaseApp
        title="user Details">
            <div className="user-component">
                
                {
                user && (
                user?.map((person, idx)=>(
                    <div key={idx} className="user-card">
                        <h1>{person.name}</h1>
                        <p>Batch : {person.batch}</p>
                        <p>Email : {person.email}</p>
                        <p>Experience : {person.experience}</p>
                        <div>
                            <button className="btn edit-btn" onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>
                            <button className="btn view-btn" onClick={()=>history.push(`/user/${idx}`)}>view</button>
                            <button className="btn del-btn" onClick={()=>deleteUser(person.id)}>Delete</button>
                        </div>
                    </div>
                )))}
            </div>
        </BaseApp>

    )
}