import admin from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://construyo-coding-challenge.firebaseio.com",
});
const DB = admin.firestore();

export default DB;
