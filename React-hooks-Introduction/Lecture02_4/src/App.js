import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if(clientY <= 0) { 
      onBefore();
    };
    
  };
  useEffect(() => {
    if(typeof onBefore === "function") {
      document.addEventListener("mouseout", handle);
      return () => document.removeEventListener("mouseout", handle);  
    } else {
      return;
    }
    
  }, []);
}

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}

export default App;
