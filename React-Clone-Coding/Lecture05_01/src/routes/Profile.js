import React, { useEffect,useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { authService, dbService } from "fbase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";


export default ({userObj}) => {
    const navigate = useNavigate()
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () =>  {
        signOut(authService)
        navigate("/", {replace: true});
        
    };
    const getMyNweet = async() => {
        const nweetQuery = query(collection(dbService,"nweets"),where("creatorId","==",userObj.uid),orderBy("createdAt","desc"));
        const querySnapshot = await getDocs(nweetQuery);
    }
    useEffect(()=> {
        getMyNweet();
    });
    const onSubmit = async (event) => {
        event.preventDefault()
        if(userObj.displayName !== newDisplayName) {
            await updateProfile(userObj, {displayName : newDisplayName})     
        }
    }
    const onChange = (event) => {
        const {target : { value } } = event;
        setNewDisplayName(value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="Display Name" value={newDisplayName}/>
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}