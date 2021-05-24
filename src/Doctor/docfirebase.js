import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDCCcmOLqvCFskyRKCoaS3uQ_s2i1PXKSs",
    authDomain: "med-app-doc-f67dd.firebaseapp.com",
    projectId: "med-app-doc-f67dd",
    storageBucket: "med-app-doc-f67dd.appspot.com",
    messagingSenderId: "323036710949",
    appId: "1:323036710949:web:5efa174f35f580786f57cc"
  };

  var firebaseApp;

  if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
 }else {
    firebaseApp = firebase.app(); 
 }

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;
  