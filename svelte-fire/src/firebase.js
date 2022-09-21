import { initializeApp } from 'firebase/app';
import { doc, getFirestore, collection, addDoc, getDocs, deleteDoc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAoPpAJ0WEwf-Hzw-nFKiKY7fOUA6NaIqE",
   authDomain: "svelte-fire-1f276.firebaseapp.com",
   projectId: "svelte-fire-1f276",
   storageBucket: "svelte-fire-1f276.appspot.com",
   messagingSenderId: "715872654512",
   appId: "1:715872654512:web:de70fc4866638bbbaf9775"
 };

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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




