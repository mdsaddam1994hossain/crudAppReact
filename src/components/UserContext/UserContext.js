import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) =>{
    const [users,setUsers] = useState([
        {id:"1",name:"Saddam",position:"Developer",salary:"25000"},
        {id:"2",name:"Mamun",position:"Designer",salary:"24000"}
    ]);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}