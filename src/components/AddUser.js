import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";
import { AppState } from "../Context/AppProvider";



export function AddUser(){
    const {user,setUser}=AppState();
    const history=useHistory()

    const [name, setName]=useState("")
    const [id, setId]=useState("")
    const [email, setEmail]=useState("")
    const [experience, setExperience]=useState("")
    const [batch, setBatch]=useState("")

    const addNewUser=async()=>{
        const newUser={
            id,
            name,
            email,
            experience,
            batch
        }
       

        try{
            const response=await fetch("https://6411f5f1f9fe8122ae18e9d8.mockapi.io/user",{
                method:"POST",
                body:JSON.stringify(newUser),
                headers:{
                    "Content-Type":"application/json",
                }
            });
            const data=await response.json();
            console.log(data);
            setUser([...user,data]);
            history.push("/")
        }
        catch(error){
            console.log(error);
        }
        
    }

    return(
        <BaseApp title="Add a New User">
            <div>            
            <input placeholder="id" value={id} onChange={(event)=>setId(event.target.value)}/>
            <input placeholder="name" value={name} onChange={(event)=>setName(event.target.value)}/>
            <input placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input placeholder="experience" value={experience} onChange={(event)=>setExperience(event.target.value)}/>
            <input placeholder="batch" value={batch} onChange={(event)=>setBatch(event.target.value)}/>
            <button onClick={addNewUser}>Add</button>            
            </div>
        </BaseApp>
        
    )
}