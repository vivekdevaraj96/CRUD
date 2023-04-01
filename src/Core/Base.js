import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
    const history=useHistory();
    return(
        <div>
            <div>
            <div className="nav-styles">
                <span>
                    <button onClick={()=>history.push("/add/user")} className="nav-buttons">Add User</button>
                </span>

                <span>
                    <button onClick={()=>history.push("/")} className="nav-buttons">Dashboard</button>
                </span>
            </div>


            <div className="title"> {title} </div>
            </div>
            <div className="children">{children}<footer>contact us:
                <div>email:react@email.com</div>
                <div>phone:8525436515</div>
            </footer></div>
            
        </div>
    )
} 