import firebase from './../database/firebase';
import "@firebase/auth";
import "@firebase/firestore";

export const register=(email,password,{navigation})=>{
    firebase .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid;
      console.log(uid);
      const data = {
        id: uid,
        email,
        password,
      };
      const usersRef = firebase.firestore().collection("users");
      usersRef
        .doc(uid)
        .set(data)
        .then(() => {
         navigation.navigate("Home", { user: data });
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
    
    
    
    
}