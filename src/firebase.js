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

  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

var fire = firebase.initializeApp(config);

export default fire;

// database.ref().set({
//   result: "1+1=2"
// });

// database.ref().set("This is my data");
