import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHRghJGrK1xn1rh96_9awU5HAarT2j728",
  authDomain: "pllbx-13b32.firebaseapp.com",
  databaseURL: "https://pllbx-13b32-default-rtdb.firebaseio.com",
  projectId: "pllbx-13b32",
  storageBucket: "pllbx-13b32.appspot.com",
  messagingSenderId: "487157437668",
  appId: "1:487157437668:web:57932548b3ac91b30bc8f1",
};




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase ;
