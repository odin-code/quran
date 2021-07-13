import firebase from "firebase";
const firebaseConfig = {
   apiKey: "AIzaSyDif_KWh8IUPY_VAceZwq0QciiW9JacMtU",
   authDomain: "quran-d4984.firebaseapp.com",
   projectId: "quran-d4984",
   storageBucket: "quran-d4984.appspot.com",
   messagingSenderId: "324560821092",
   appId: "1:324560821092:web:06d160609d6e19e96b7871",
   measurementId: "G-RD6JPGKR34"
};
try {
   firebase.initializeApp(firebaseConfig);
   var db = firebase.firestore();
} catch (err) {
   if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
   }
}
export default db;
