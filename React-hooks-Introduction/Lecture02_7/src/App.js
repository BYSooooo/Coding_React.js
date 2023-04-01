import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, options) => {
  if(!("Notification" in window)) {
    return;
  }
  const fireNoti = () => {
    if(Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if(permission === "granted") {
          new Notification(title, options);
        } else {
          return ;
        }
      })
    }else {
      new Notification(title, options);
    }
  }
  return fireNoti;
}

const App = () => {
  const triggerNoti = useNotification("Can I steal your Kimchi", {body : "I Love Kimchi, dont you?"})
  return (
    <div >
      <button onClick={triggerNoti}>Hello</button>
    </div>
  )
}
export default App;
