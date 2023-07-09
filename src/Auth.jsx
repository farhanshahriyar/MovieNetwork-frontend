// import React, { createContext, useEffect, useState } from 'react'
// import auth from './firebase'
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
// import { doc, getDoc, setDoc } from 'firebase/firestore' // for admin check
// import { auth, db } from './firebase'; // for admin check


// export const Context = createContext({})
// const Auth = ({children}) => {
//     const [user, setUser] = useState(null)
//     const [tempName, setName] = useState("")
//     const [isAdmin, setIsAdmin] = useState(false)
    
//     const createUser = async (email, password)=> {
//         const data = await createUserWithEmailAndPassword(auth, email, password)
//         return data;
//     }
//     const updateUser = async (name, photo)=> {
//         const data = await updateProfile(auth.currentUser, {
//             displayName: name,
//         })
//         return data;
//     }

//     const signIn = async(email, password)=> {
//         const data = await signInWithEmailAndPassword(auth, email, password) 
//         return data
//     }

//     // admin check
//     const checkAdmin = async(user) => {
//         if(user) {
//             const docRef = doc(db, 'admins', user.uid);
//             const docSnap = await getDoc(docRef);
//             if(docSnap.exists()) {
//                 setIsAdmin(true)
//             } else {
//                 setIsAdmin(false)
//             }
//         } else {
//             setIsAdmin(false)
//         }
//     }

//     // const value = {createUser, updateUser, user, signIn, tempName, setName}

//     // useEffect(()=> {
//     //     onAuthStateChanged(auth,user=>{
//     //         setUser(user)
//     //     })
//     // },[]) 

//     const value = {createUser, updateUser, user, signIn, tempName, setName, isAdmin}

//     useEffect(()=> {
//         onAuthStateChanged(auth, user=>{
//             setUser(user)
//             checkAdmin(user)
//         })
//     },[]) 

//   return (
//     <Context.Provider value={value}>
//         {children}
//     </Context.Provider>
//   )
// }

// export default Auth


import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from './firebase'; // import both auth and db from firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore' // for admin check

export const Context = createContext({})
const Auth = ({children}) => {
    const [user, setUser] = useState(null)
    const [tempName, setName] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    
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

    // admin check
    // const checkAdmin = async(user) => {
    //     if(user) {
    //         const docRef = doc(db, 'admins', user.uid);
    //         const docSnap = await getDoc(docRef);
    //         if(docSnap.exists()) {
    //             setIsAdmin(true)
    //         } else {
    //             setIsAdmin(false)
    //         }
    //     } else {
    //         setIsAdmin(false)
    //     }
    // }
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
    

    const value = {createUser, updateUser, user, signIn, tempName, setName, isAdmin}

    useEffect(()=> {
        onAuthStateChanged(auth, user=>{
            setUser(user)
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
