import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import AuthContex from './AuthContex'
import auth from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();


export default function AuthProvider({ children }) {
    const [user, setuser] = useState(null)

    const [loding, setloding] = useState(true)
    console.log(user)


    const creactuser =(email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser =(email, password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
       
      })
    }

    const handleGoogleLogin =()=>{
      return signInWithPopup(auth, GoogleProvider)
      .then((result) =>{
        console.log(result.user)
      })

    }

    const logout =()=>{
        signOut(auth)
    }



    useEffect(()=>{
     const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              
            setuser(user)
            } else {
                setuser(null)
            }
            setloding(false)
          });
          return ()=>unsuscribe();
        },[])

    const authinfo = {
        user,
        setuser,
        loding,
        setloding,
        creactuser,
        loginuser,
        logout,
        handleGoogleLogin
    }
    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    )
}
