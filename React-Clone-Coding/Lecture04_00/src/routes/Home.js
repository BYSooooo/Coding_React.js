import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import { dbService } from "fbase";
import Nweet from "components/Nweet";


const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    useEffect(()=> {
        onSnapshot(collection(dbService,"nweets"),(snapshot)=> {
            const nweetArray = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
            setNweets(nweetArray)
        })
        
    }, [])
    const onSubmit = async (event) => {
        event.preventDefault();
        await addDoc(collection(dbService, "nweets"), {
            text : nweet,
            createdAt : Date.now(),
            creatorId: userObj.uid

        });
        setNweet("");
    }
    const onChange = (event) => {
        const { target : {value}} = event;
        setNweet(value);
    }
    const onFileChange = (event) => {
        const {target : { files }} = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            console.log(finishedEvent)
        }
        reader.readAsDataURL(theFile);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange}/>
                <input type="submit" value="Nweet" />
                
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet  key={nweet.id} 
                            nweetObj={nweet}
                            isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>   
        </div>
    )
}
    

export default Home;