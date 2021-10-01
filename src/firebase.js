import * as firebase from "firebase";
import "firebase/database";
import 'firebase/storage';

let config = {
    apiKey: "AIzaSyBu6SFKlJ-pGstkjtd_I__zqizSdwrcpfU",
    authDomain: "qr-donate-react.firebaseapp.com",
    databaseURL: "https://qr-donate-react-default-rtdb.firebaseio.com",
    projectId: "qr-donate-react",
    storageBucket: "qr-donate-react.appspot.com",
    messagingSenderId: "624039897159",
    appId: "1:624039897159:web:d74b6be6ace4f9ef30e962"
};

firebase.initializeApp(config);
const storage = firebase.storage();
const db = firebase.database().ref('/project');
export {
    storage, db, firebase as default
}