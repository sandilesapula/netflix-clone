
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDateaMZqBUYvnpiGJEgrvck44wewsyyBQ",
  authDomain: "netflix-clone-3371c.firebaseapp.com",
  projectId: "netflix-clone-3371c",
  storageBucket: "netflix-clone-3371c.appspot.com",
  messagingSenderId: "288333162265",
  appId: "1:288333162265:web:64d45bd05be4e958c30788",
  measurementId: "G-82THP8RKSW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;