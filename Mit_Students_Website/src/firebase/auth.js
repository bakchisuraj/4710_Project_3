import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

// Create user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Sign in user with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Sign in with Google
export const doSignInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user; // Return only user info
    } catch (error) {
        throw new Error(error.message);
    }
};

// Sign out user
export const doSignOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        throw new Error(error.message);
    }
};
