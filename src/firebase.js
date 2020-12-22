import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnBsPxKUi21KE6zTJfA73mhVtDHT2_hcs",
  authDomain: "med-app-a689a.firebaseapp.com",
  projectId: "med-app-a689a",
  storageBucket: "med-app-a689a.appspot.com",
  messagingSenderId: "655520495286",
  appId: "1:655520495286:web:bdab65da9f4d60f2c61817",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
