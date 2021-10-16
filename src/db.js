/*import firebase from "firebase/compat/app";
import "firebase/firestore";*/

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    piKey: "AIzaSyBknW458obj6i-jLUl2QL6pdgEIc1GHKZg",
    authDomain: "todoninja12.firebaseapp.com",
    projectId: "todoninja12",
    storageBucket: "todoninja12.appspot.com",
    messagingSenderId: "839555786811",
    appId: "1:839555786811:web:1329929c2363ce220b941e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

