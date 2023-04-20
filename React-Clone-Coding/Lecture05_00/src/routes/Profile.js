import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { authService, dbService } from "fbase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";


export default ({userObj}) => {
    const navigate = useNavigate()
    const onLogOutClick = () =>  {
        signOut(authService)
        navigate("/", {replace: true});
        
    };
    const getMyNweet = async() => {
        const nweetQuery = query(collection(dbService,"nweets"),where("creatorId","==",userObj.uid),orderBy("createdAt","desc"));
        const querySnapshot = await getDocs(nweetQuery);
        querySnapshot.forEach((doc) => {
            console.log(doc.id,"=>",doc.data());
        })
    }
    useEffect(()=> {
        getMyNweet();
    })

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}