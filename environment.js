import Constants from "expo-constants";
import { Platform } from "react-native";

const localhost =
 Platform.OS === "android" ? "localhost:19002" : "";
 
const ENV = {
 dev: {
   apiUrl: localhost,
  amplitudeApiKey: null,
   apiKey:"AIzaSyCHRghJGrK1xn1rh96_9awU5HAarT2j728",
   authDomain:"pllbx-13b32.firebaseapp.com",
   databaseUrl:"https://pllbx-13b32-default-rtdb.firebaseio.com",
   proyectId:"pllbx-13b32",
   storageBucket:"facebook-login-test-ecebc.appspot.com",
   messengerSenderId:"487157437668",
   appFacebookId:"187104516388378",
   appId:"1:487157437668:web:57932548b3ac91b30bc8f1"
 },
 staging: {
   // Add other keys you want here
 },
 prod: {
//    apiUrl: "[your.production.api.here]",
//    amplitudeApiKey: "[Enter your key here]",
   // Add other keys you want here
 }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
 // What is __DEV__ ?
 // This variable is set to true when react-native is running in Dev mode.
 // __DEV__ is true when run locally, but false when published.
 
   return ENV.dev;

};

export default getEnvVars;