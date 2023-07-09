import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from './firebase'; // import both auth and db from firebase
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore' // for admin check
import axios from 'axios';

export const Context = createContext({})
const Auth = ({children}) => {
    const [user, setUser] = useState(null)
    const [tempName, setName] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const [search, setSearch] = useState("")
    const googleProvider = new GoogleAuthProvider();

    // google sign in firebase
    const signInWithGoogle = async () => {
        const data = await signInWithPopup(auth, googleProvider)
        await saveUser(data.user)
        return data;
    }


    const saveUser = async (user) => {
        const data = {name: user.displayName, email: user.email, role: "User"}
        const { data:dataTo } = await axios.put(`http://localhost:5000/api/saveuser/${user.email}`, data)
        console.log(dataTo)
        }

    //forgetpassword firebase
    const resetPassword = async (email) => {
        const data = await sendPasswordResetEmail(auth, email)
        return data;
    }
    
    const createUser = async (email, password)=> {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        return data;
    }
    const updateUser = async (name, photo)=> {
        const data = await updateProfile(auth.currentUser, {
            displayName: name,
        })
        return data;
    }

    const signIn = async(email, password)=> {
        const data = await signInWithEmailAndPassword(auth, email, password) 
        return data
    }

    
    const checkAdmin = async(user) => {
        try {
            if(user) {
                const docRef = doc(db, 'admins', user.uid);
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()) {
                    setIsAdmin(true)
                } else {
                    setIsAdmin(false)
                }
            } else {
                setIsAdmin(false)
            }
        } catch (error) {
            console.error("Failed to get document: ", error);
            // Notify the user that they are offline or unable to fetch data
        }
    }
    

    const value = {createUser, updateUser, user, signIn, tempName, setName, isAdmin, search, setSearch, resetPassword, signInWithGoogle}

    useEffect(()=> {
        onAuthStateChanged(auth, user=>{
            setUser(user)
            console.log(user)
            checkAdmin(user)
        })
    },[]) 

  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default Auth
