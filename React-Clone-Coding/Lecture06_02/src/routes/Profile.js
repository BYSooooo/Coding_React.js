import React, { useEffect,useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { authService, dbService } from "fbase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";


export default ({refreshUser, userObj}) => {
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
            await updateProfile(authService.currentUser, {displayName : newDisplayName})     
        }
        refreshUser();
    }
    const onChange = (event) => {
        const {target : { value } } = event;
        setNewDisplayName(value)
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input onChange={onChange} type="text" placeholder="Display Name" value={newDisplayName} autoFocus className="formInput"/>
                <input type="submit" value="Update Profile" className="formBtn" style={{marginTop : 10}}/>
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>
        </div>
    )
}