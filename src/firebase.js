import * as firebase from "firebase";
import "firebase/database";
import 'firebase/storage';

let config = {
    apiKey: "AIzaSyAFpfdPUv7weX-zGRpjG7_kMrOdtJoTRWI",
    authDomain: "qr-donate-wa21-11.firebaseapp.com",
    databaseURL: "https://qr-donate-wa21-11-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qr-donate-wa21-11",
    storageBucket: "qr-donate-wa21-11.appspot.com",
    messagingSenderId: "359529706826",
    appId: "1:359529706826:web:8b5173836b49fff4097db3"
};

firebase.initializeApp(config);
const storage = firebase.storage();
const db = firebase.database();
export {
    storage, db, firebase as default
}