// import * as firebase from "firebase";
import firebase from "firebase";

const config = {
  // apiKey: "AIzaSyAsGjrbY97mZ7AYU28kt00RNDHHyzy9opg",
  // authDomain: "live-calculator.firebaseapp.com",
  // databaseURL: "https://live-calculator.firebaseio.com",
  // projectId: "live-calculator",
  // storageBucket: "live-calculator.appspot.com",
  // messagingSenderId: "594021649148",
  // appId: "1:594021649148:web:27a69b66a9873bce"

  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

var fire = firebase.initializeApp(config);

export default fire;

// database.ref().set({
//   result: "1+1=2"
// });

// database.ref().set("This is my data");
