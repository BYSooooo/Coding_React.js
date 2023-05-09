import { legacy_createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE"

const addToDo = createAction("ADD", function prepare(text) {
    return {
        payload : {
            text,
            id : Date.now()
        }
    }
})
const deleteToDo = createAction("DELETE")

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type : 
            console.log(action)
            return [{ text : action.payload.text, id: action.payload.id}, ...state];
        case deleteToDo.type : 
            console.log(action)
            return state.filter(toDo => toDo.id !== action.payload);
        default :
            return state;
    }
}

const store = legacy_createStore(reducer)

export const actionCreators = {
    addToDo, deleteToDo
}

export default store;