import React, { useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "fbase";

const AuthForm = () => {
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
        } catch (error) { 
            setError(error.message); 
        }
    }
    const toggleAccount = () => setNewAccount(prev => !prev );
    return (
        <>
        <form onSubmit={onSubmit} className="container">
            <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} className="authInput"/>
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} className="authInput"/>
            <input type="submit" class="authInput authSubmit" value={newAccount ? "Create Account" : "Log In"} />
            {error && <span className="authError">{error}</span>}
            <span onClick={toggleAccount} className="authSwitch"> {newAccount ? "SignIn" : "Create Account"} </span>
        </form>
      </>
    )
}
export default AuthForm;