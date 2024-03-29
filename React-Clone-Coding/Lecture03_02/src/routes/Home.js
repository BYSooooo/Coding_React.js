import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { dbService } from "fbase";


const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const getNweets = async() => {
        const dbNweets = await getDocs(collection(dbService,"nweets"));
        dbNweets.forEach(document =>  {
            const nweetObject = {
                ...document.data(),
                id: document.id
            }
            setNweets((prev) => [nweetObject,...prev]);
        })
    }
    useEffect(()=> {
        getNweets();
    }, [])
    const onSubmit = async (event) => {
        event.preventDefault();
        await addDoc(collection(dbService, "nweets"), {
            nweet,
            createdAt : Date.now()
        });
        setNweet("");
    }
    const onChange = (event) => {
        const { target : {value}} = event;
        setNweet(value);
    }
    console.log(nweets)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map(nweet => 
                    <div key={nweet.id}>
                        <h4>{nweet.nweet}</h4>
                    </div>)}
            </div>   
        </div>
    )
}
    

export default Home;