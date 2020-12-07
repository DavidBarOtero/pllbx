import React, { useState, useEffect } from "react";
import * as Facebook from "expo-facebook";
import * as RootNavigation from "./../RootNavigation";
import { firebaseConfig } from "./../database/firebase";

import firebase from "../database/firebase";

import "@firebase/auth";
import "@firebase/firestore";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  //  const{appFacebookId}=getEnvVars();
  const { appFacebookId } = firebaseConfig;
  const [user, setUser] = useState(false);

  const usersRef = firebase.firestore().collection("users");

  useEffect(() => {
    if (user === true) {
      RootNavigation.navigate("Home");
      // console.log(user)
    } else {
      RootNavigation.navigate("LogReg");
    }
  }, [user]);
  const register = (email, password, { navigation }) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;

        const data = {
          id: uid,
          email,
        };
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            setUser(true);

            if (user === true) {
              navigation.navigate("Home", { user: data });
            } else {
              navigation.navigate("LogReg");
            }
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
  const userLogin = (email, password, { navigation }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("respuesta tras loguearse" + "" + res);
        console.log("User logged-in successfully!");
        setUser(true);
        // navigation.navigate("Home");
      })
      .catch((error) => alert(error));
  };

  const signOut = ({ navigation }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        navigation.navigate("LogReg");
      })

      .catch((error) => alert(error));
  };

  const signInWithFacebook = async () => {
    const permissions = ["public_profile", "email"];
    await Facebook.initializeAsync({
      appId: appFacebookId,
    });
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions,
    });
    // console.log(token);

    if (type == "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const facebookProfileData = await firebase
        .auth()
        .signInWithCredential(credential)
        .then((response) => {
          const userData = { ...response.user };

          const uid = userData.uid;
          const name = userData.displayName;
          const email = userData.email;
          setUser(true);
          const data = {
            id: uid,
            name,
            email,
          };
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              alert("registro listo");
            })
            .catch((error) => {
              alert(error);
              console.log(error);
            });
        })
        .catch((error) => console.log(error));
    }
  };
  const signInWithGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: androidClientId,
        iosClientId: IOSClientId,
        behavior: "web",
        iosClientId: "", //enter ios client id
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken
        );
        const googleProfileData = await firebase
          .auth()
          .signInWithCredential(credential);
        setUser(true);
        console.log("registrado por google");
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        userLogin,
        signOut,
        user,
        signInWithFacebook,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
