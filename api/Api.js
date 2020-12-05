import firebase from "./../database/firebase";
import "@firebase/auth";
import "@firebase/firestore";
import * as Facebook from "expo-facebook";
import firebaseConfig from "./../database/firebase";

const usersRef = firebase.firestore().collection("users");
export const signInWithFacebook = async () => {
  const appId = "187104516388378";
  const permissions = ["public_profile", "email"];
  await Facebook.initializeAsync({
    appId: appId,
  });
  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions,
  });

  if (type == "success") {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    const facebookProfileData = await firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
       
      })
      .catch((error) => console.log(error));
      console.log(facebookProfileData);
    // Sign in with Facebook credential
  }
};
export const register = (email, password, firstLogin) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid;

      const data = {
        id: uid,
        email,
        password,
      };
      usersRef
        .doc(uid)
        .set(data)
        .then(() => {
          //   navigation.navigate("Home", { user: data });
          firstLogin();
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
};
