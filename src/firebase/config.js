import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqd4N-nTtsovP9pSm5gBRXDYvW-bdxSN8",
  authDomain: "udemy-meraj.firebaseapp.com",
  projectId: "udemy-meraj",
  storageBucket: "udemy-meraj.appspot.com",
  messagingSenderId: "620821113249",
  appId: "1:620821113249:web:2d018f37ae442e3c1883e0"
};

// init firebase
firebase.initializeApp(firebaseConfig)


//init firestore service
const projectFirstore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export {projectFirstore, timestamp }