import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebaseConfig';
 export const AuthContext =createContext(null);
 const auth =getAuth(app);


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    // const user ={displayName:'Muei Khan'}
    const createUser =(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
         

    }
    const signIn =(email,password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true)
       return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    },[])    

    const authinfo={
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}

            
        </AuthContext.Provider>
    );
};

export default AuthProvider;