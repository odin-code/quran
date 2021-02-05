import firebase from "firebase";
const firebaseConfig = {
   apiKey: "AIzaSyCRWp1KrFd4s1io2MCvxtNvoXjJrkm0Nj0",
   authDomain: "claudmedia-fa6c6.firebaseapp.com",
   databaseURL: "https://claudmedia-fa6c6-default-rtdb.firebaseio.com",
   projectId: "claudmedia-fa6c6",
   storageBucket: "claudmedia-fa6c6.appspot.com",
   messagingSenderId: "1007131420518",
   appId: "1:1007131420518:web:c5ff4ee6f8827dccee4aa7",
   measurementId: "G-DMFEVV34BP",
};
try {
   firebase.initializeApp(firebaseConfig);
} catch (err) {
   if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
   }
}
const fire = firebase;
export default fire;
