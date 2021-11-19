import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializeApp from "../Firebase/Firebase.inti";

const useFirebse = () => {
    firebaseInitializeApp();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
            const newUser = {email, dispalyName: name};
            setUser(newUser);
            saveUser(email, name);
                updateProfile(auth.currentUser, {
                displayName: name
                }).then(() => {

                }).catch((error) => {

                });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    } 

    const saveUser = (email, displayName) => {
            const user = {email, displayName};
            fetch('https://whispering-chamber-86517.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then()
    }

    useEffect( () => {
        fetch(`https://whispering-chamber-86517.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])
   
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth] );

    return{
        user,
        admin,
        authError,
        isLoading,
        registerUser,
        logOut,
        loginUser
        
    }
}

export default useFirebse;