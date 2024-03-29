import React from "react";
import { authService } from "fbase";
import {  GithubAuthProvider, 
          GoogleAuthProvider, 
          signInWithPopup} from "firebase/auth";    
import AuthForm from "components/AuthForm";

const Auth = () => {
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
  
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">Cotinue with Google</button>
        <button onClick={onSocialClick} name="github">Cotinue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
