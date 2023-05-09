import { legacy_createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE"

// const addToDo = (text) => {
//     return {
//         type : ADD,
//         id : Date.now(), 
//         text
//     }
// }

// const deleteToDo = id => {
//     return {
//         type : DELETE,
//         id : parseInt(id)
//     }
// }

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type : 
            console.log(action)
            return [{ text : action.payload, id: action.id}, ...state];
        case deleteToDo.type : 
            return state.filter(toDo => toDo.id !== action.id);
        default :
            return state;
    }
}

const store = legacy_createStore(reducer)

export const actionCreators = {
    addToDo, deleteToDo
}

export default store;