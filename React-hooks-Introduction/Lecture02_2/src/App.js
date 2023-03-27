import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(()=> {
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, [])
  return typeof onClick !== "function" ? undefined : element;
}
const App = () => {
  const sayHello = () => console.log("Say Hello")
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

export default App;
