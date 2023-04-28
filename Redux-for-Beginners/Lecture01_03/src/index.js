import { legacy_createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
    //console.log(count, action);
    if(action.type === "ADD") {
        return count + 1
    } else if(action.type === "MINUS") {
        return count - 1
    } else {
        return count;
    }
};
const countStore = legacy_createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState()
}

countStore.subscribe(onChange)

const handleMinus = () => {
    countStore.dispatch({type : "MINUS"})

}

plus.addEventListener("click", () => { countStore.dispatch({type : "ADD"})});
minus.addEventListener("click", handleMinus);