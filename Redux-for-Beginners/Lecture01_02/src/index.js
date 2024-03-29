import { legacy_createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
    console.log(count, action);
    if(action.type === "ADD") {
        return count + 1
    } else if(action.type === "MINUS") {
        return count - 1
    } else {
        return count;
    }
};

const countStore = legacy_createStore(countModifier);

countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "MINUS"});

console.log(countStore.getState());