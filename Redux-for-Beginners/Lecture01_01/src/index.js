import { legacy_createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
    console.log(state)
    return state;
};

const countStore = legacy_createStore(countModifier);

console.log(countStore.getState())