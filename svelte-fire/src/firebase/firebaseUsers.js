
import { doc, collection, addDoc, getDocs, deleteDoc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig.js';

export const addUser = async (nombre, email) => {
  try {
    console.log('addUser');
    console.log("datos: ", {nombre,email});
    const docRef = await addDoc(collection(db, "users"), {
      nombre,
      email
    });      
    return {status: 0, data: docRef.id}
  } catch (e) {
    console.error("Error adding document: ", e);      
    return {status: 1, data: e}
  }    
}

export const getUsers = async () => {
  try{
    let toReturn = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((docu) => {
      var docdata = docu.data();
      docdata.id = docu.id;
      toReturn.push(docdata);      
    });
    return {status: 0, users: toReturn};
  }
  catch(error){
    console.log(error);
    return {status: 1, error: error};
  }
}

export const getUserDetails = async (id) => {
  try{
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let toReturn = docSnap.data();
      toReturn.id = docSnap.id;
      return {status: 0, user: toReturn};
    } else {
      return {status: 1, error: "No such document!"};
    }
  }
  catch(error){
    console.log(error);
    return {status: 1, error: error};
  }
}


export const deleteUser = async (id) => {
  try{
    const docRef = collection(db, "users");
    await deleteDoc(doc(docRef, id));
    return {status: 0, data: id};
  }
  catch(error){
    console.log(error);
    return {status: 1, error: error};
  }
}

export const modifyUser = async (user) => {
  try{
    const docRef = doc(db, "users", user.id);
    await setDoc(docRef, {
      nombre: user.nombre,
      email: user.email
    });
    return {status: 0, data: user.id};
  }
  catch(error){
    console.log(error);
    return {status: 1, error: error};
  }
}




