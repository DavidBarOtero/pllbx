import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import getEnvVars from './../../environment';


const {apiKey,authDomain,databaseURL,projectId,storageBucket,messagingSenderId,appId,appFacebookId}=getEnvVars();


export const firebaseConfig = {
  apiKey:apiKey,
  authDomain: authDomain,
  databaseURL:databaseURL ,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  appFacebookId:appFacebookId
};




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase ;
