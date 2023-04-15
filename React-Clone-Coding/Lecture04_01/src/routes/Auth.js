import React, { useState } from "react";
import { authService } from "fbase";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, 
          signInWithEmailAndPassword,
          signInWithPopup} from "firebase/auth";    

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {target : {name, value} } = event;
    if (name === "email") {
      setEmail(value)
    } else {
      setPassword(value)
    }
  };
  const toggleAccount = () => setNewAccount(prev => !prev );
  const onSocialClick = async (event) => {
    const {
      target : { name }
    } = event;
    let provider;
    if(name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data)
  }
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
      setError(error.message);
    }

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
        <span onClick={toggleAccount}> {newAccount ? "SignIn" : "Create Account"} </span>
      </form>
      <div>
        <button onClick={onSocialClick} name="google">Cotinue with Google</button>
        <button onClick={onSocialClick} name="github">Cotinue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
