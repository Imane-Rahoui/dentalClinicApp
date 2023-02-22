import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDrucrtC3pup-RYBuGoU3iBaGEVaFLTJ_M",
  authDomain: "tourin-b87d4.firebaseapp.com",
  projectId: "tourin-b87d4",
  storageBucket: "tourin-b87d4.appspot.com",
  messagingSenderId: "146959234715",
  appId: "1:146959234715:web:f3dfb83ef79189d671783e",
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth;
    this.db = app.firestore();
  }
  //Inscription
  signUpUser = (email, password) =>
    this.auth().createUserWithEmailAndPassword(email, password);
  //Connexion
  logInUser = (email, password) =>
    this.auth().signInWithEmailAndPassword(email, password);
  //Deconnexion
  SignOutUser = () => this.auth().signOut();
  user = (uid) => this.db.doc(`users/${uid}`);
}
export default Firebase;
