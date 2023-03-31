import React, { useState, useEffect, useRef } from "react";

const useFullScreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current) {
      element.current.requestFullscreen();
    }
  }
  return {element, triggerFull};
}

const App = () => {
  const {element, triggerFull} = useFullScreen();
  return (
    <div style={{height : "1000vh"}}>
        <img ref={element} src="https://i.ibb.co/R6RwNxx/grape.jpg"alt="grape"width="250" />
        <button onClick={triggerFull}> Make FullScreen</button>
    </div>
  )
}

export default App;
