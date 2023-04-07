import React, { useState } from "react";
import { authService } from "fbase";
import {  createUserWithEmailAndPassword, 
          signInWithEmailAndPassword} from "firebase/auth";    

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (event) => {
    const {target : {name, value} } = event;
    if (name === "email") {
      setEmail(value)
    } else {
      setPassword(value)
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data;
      if(newAccount) {
        //create new Account
        data = await createUserWithEmailAndPassword(authService,email,password)
        
      } else {
        //Login
        data = await signInWithEmailAndPassword(authService,email, password)
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </form>
      <div>
        <button>Cotinue with Google</button>
        <button>Cotinue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
