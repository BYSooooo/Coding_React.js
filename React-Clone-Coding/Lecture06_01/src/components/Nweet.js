import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService, stroageService } from "fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React, { useState } from "react";

const Nweet = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this Nweet");
        const objReference = ref(stroageService,nweetObj.attachmentUrl);
        if(ok) {
            const docReference = doc(dbService,"nweets",`${nweetObj.id}`);
            await deleteDoc(docReference)
            if(nweetObj.attachmentUrl !== "") await deleteObject(objReference);
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
        <div className="nweet">
            {editing 
                ? (
                    <>
                        <form onSubmit={onSubmit} className="container nweetEdit">
                            <input onChange={onChange} type="text" placeholder="Edit your Nweet" value={newNweet} required autoFocus className="formInput"/>
                            <input type="submit" value="Update Nweet" className="formBtn cancelBtn"/>
                        </form>
                        <span onClick={toggleEditing} className="formBtn cancelBtn">
                            Cancel
                        </span>
                    </>    
                ) : (
                    <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                    {isOwner && (
                        <div className="nweet__actions">
                            <span onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                        </div>
                    )}
                    </>
                )
            
            }
        </div>
    )
    
}

export default Nweet;