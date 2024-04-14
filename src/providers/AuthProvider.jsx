import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const AuthInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser)
       })
        return () => {
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;