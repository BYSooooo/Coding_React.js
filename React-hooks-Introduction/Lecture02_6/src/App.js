import React, { useState, useEffect, useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current) {
      element.current.requestFullscreen();
      if(callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if(callback && typeof callback === "function") {
      callback(false);
    }
  }
  return {element, triggerFull, exitFull};
}

const App = () => {
  const callback = (callback) => {
    console.log(callback ? "We are Full" : "We all Small");
  }
  const {element, triggerFull, exitFull} = useFullScreen(callback);
  return (
    <div style={{height : "1000vh"}}>
        <div ref={element}>
          <img src="https://i.ibb.co/R6RwNxx/grape.jpg"alt="grape"width="250" />
          <button onClick={exitFull}>Exit FullScreen</button>
        </div>
        
        <button onClick={triggerFull}> Make FullScreen</button>
    </div>
  )
}

export default App;
