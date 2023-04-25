import React, {useEffect, useState} from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    onAuthStateChanged(authService,(user) => {
      if(user) {
        setIsLoggedIn(true)
        //setUserObj(user)
        setUserObj({
          displayName : user.displayName,
          uid : user.uid,
          updateProfile : (args) => user.updateProfile(args)
        });

      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  },[])

  const refreshUser = () => {
    console.log(authService)
    const user = authService.currentUser;
    setUserObj({
      displayName : user.displayName,
      uid : user.uid,
      updateProfile : (args) => user.updateProfile(args)
    });
  }
  
  return (
    <>
      {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj}/> : "initializing..."}
      
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
    
  );
}

export default App;
