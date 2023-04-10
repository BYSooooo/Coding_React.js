import React from "react";
import { signOut } from "firebase/auth";
import { authService } from "fbase";
import { useNavigate } from "react-router-dom";


export default () => {
    const navigate = useNavigate()
    const onLogOutClick = () =>  {
        signOut(authService)
        navigate("/", {replace: true});
        
    }
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}