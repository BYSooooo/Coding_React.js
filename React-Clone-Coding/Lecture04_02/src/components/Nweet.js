import { dbService } from "fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const Nweet = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this Nweet");
        console.log(ok)
        if(ok) {
            const docReference = doc(dbService,"nweets",`${nweetObj.id}`);
            await deleteDoc(docReference)

        }
    }

    const toggleEditing =() => setEditing((prev)=> !prev);
    const onSubmit = async (event) => {
        event.preventDefault()
        const docReference = doc(dbService,"nweets",`${nweetObj.id}`);
        await updateDoc(docReference,{text : newNweet});
        setEditing(false)
    }
    const onChange = (event) => {
        const {target: {value} } = event;
        setNewNweet(value)
    }

    return (
        <div>
            {editing 
                ? (
                    <>
                        <form onSubmit={onSubmit}>
                            <input onChange={onChange} type="text" placeholder="Edit your Nweet" value={newNweet} required />
                            <input type="submit" value="Update Nweet" />
                        </form>
                        <button onClick={toggleEditing}>Cancel</button>
                    </>
                ) : (
                    <>
                    <h4>{nweetObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Nweet</button>
                            <button onClick={toggleEditing}>Edit Nweet</button>
                        </>

                    )}
                    </>
                )
            
            }
        </div>
    )
    
}

export default Nweet;