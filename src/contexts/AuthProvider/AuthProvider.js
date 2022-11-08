import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //  email pass authentication 
    // sign up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //update User Info
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };

    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    //getting current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // if (currentUser == null) {}
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);


    //3rd party login
    // goggle login 
    const providerLoginGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };


    const authInfo = {
        user,
        loading,
        setLoading,
        providerLoginGoogle,
        logOut,
        createUser,
        signIn,
        updateUserProfile,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;