import React, { useState, useEffect, useRef } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  return status
}


const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "Online" : "OffLine");
  } 
  const onLine = useNetwork(handleNetworkChange)
  return (
    <div>
      <h1>{onLine ? "Online" : "OffLine"}</h1>
    </div>
  )
}

export default App;
