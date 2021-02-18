import firebase from "firebase/app"
import "firebase/auth"
import FIREBASE_CONFIG from "./core/firebaseConfig";

const app = firebase.initializeApp(FIREBASE_CONFIG);




export const auth = app.auth()
export default app