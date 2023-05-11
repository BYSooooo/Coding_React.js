import { legacy_createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

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

const reducer = createReducer([], (builder) => {
    builder
        .addCase(addToDo, (state, action) => {
            state.push({text : action.payload.text, id: action.payload.id});
        })
        .addCase(deleteToDo, (state, action) => {
            return state.filter(toDO => toDO.id !== action.payload)
        })
})

const store = configureStore({reducer})

export const actionCreators = {
    addToDo, deleteToDo
}

export default store;