import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig.js';
import {LogOut} from '../scripts/router.js';


let user = null;

export const createUserEmailPwd = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);             
        user = userCredential.user;
        return {status: 0, data: userCredential.user};
    } catch (error) {
        console.log(error);
        return {status: 1, data: error};
    }
}

export const loginUserEmailPwd = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);            
        user = userCredential.user; 
        return {status: 0, data: userCredential.user};
    } catch (error) {
        console.log(error);
        return {status: 1, data: error};
    }
}

export const logOut = async () => {
    try {
        console.log('logOut');
        await auth.signOut();
        user = null;
        LogOut();
        return {status: 0, data: null};
    } catch (error) {
        console.log(error);
        return {status: 1, data: error};
    }
}

export const getUser = () => {
    return user;
}