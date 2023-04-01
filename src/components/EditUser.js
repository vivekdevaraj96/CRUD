import React,{useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";
import { AppState } from "../Context/AppProvider";

const EditUser=()=>{
    const {user,setUser}=AppState();

    const [name, setName]=useState("")
    const [idx, setIdx]=useState("")
    const [email, setEmail]=useState("")
    const [experience, setExperience]=useState("")
    const [batch, setBatch]=useState("")

    const {id}=useParams();
    const history=useHistory()

    const selectedUser=user.find((per)=>per.id===id);
    // console.log(selectedUser)

    useEffect(()=>{
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setEmail(selectedUser.email)
        setExperience(selectedUser.experience)
        setBatch(selectedUser.batch)
    },[]);

    const updateUser=async()=>{
        const editIndex=user.findIndex(per=>per.id===id)
        // console.log(editIndex)

        const editedData={
            id:idx,
            name,
            email,
            experience,
            batch
        }

        try{
            const response=await fetch(`https://6411f5f1f9fe8122ae18e9d8.mockapi.io/user/${idx}`,{
                method:"PUT",
                body:JSON.stringify(editedData),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const data=await response.json();
            console.log(data)
            user[editIndex]=data
            setUser([...user]);
            history.push("/");
        }
        catch(error){
            console.log(error)
        }

        // console.log(editedData)
       
  

    }

    return(
        <BaseApp title="Edit User">
        <div>            
        <input placeholder="id" value={idx} onChange={(event)=>setIdx(event.target.value)}/>
        <input placeholder="name" value={name} onChange={(event)=>setName(event.target.value)}/>
        <input placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <input placeholder="experience" value={experience} onChange={(event)=>setExperience(event.target.value)}/>
        <input placeholder="batch" value={batch} onChange={(event)=>setBatch(event.target.value)}/>
        <button onClick={updateUser}>save changes</button>            
        </div>
    </BaseApp>
    )
}

export default EditUser