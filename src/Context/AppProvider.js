import React,{createContext,useContext,useState,useEffect} from "react";


const AppContext=createContext();

const AppProvider=({children})=>{


    const [user, setUser]=useState([]);

    useEffect(()=>{
        const getuserDetails=async()=>{
            try{
                const response=await fetch("https://6411f5f1f9fe8122ae18e9d8.mockapi.io/user",{method:"GET"});
                const data=await response.json();
                // console.log(data)
                setUser(data)
              
            }catch(error){
                console.log(error)
            }
        }
        getuserDetails();
    })

    return(
        <AppContext.Provider value={{user,setUser}}>
            {children}
        </AppContext.Provider>
        )
}

export const AppState=()=>{
    return useContext(AppContext)
}

export default AppProvider