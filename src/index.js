/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind/tailwind.output.css";
import { JournalApp } from "./JournalApp";
import "./css/styles.scss";
const FIREBASE = firebase;
const firebaseConfig = {
  apiKey: "AIzaSyA2Iges9_vdmAjZ6k0CXQj9Z5VE1rtvT4k",
  authDomain: "react-apps-139bb.firebaseapp.com",
  databaseURL: "https://react-apps-139bb.firebaseio.com",
  projectId: "react-apps-139bb",
  storageBucket: "react-apps-139bb.appspot.com",
  messagingSenderId: "793702707855",
  appId: "1:793702707855:web:ccb866ae82f727f0f1f6fa",
};
FIREBASE.initializeApp(firebaseConfig);
const dataBase = FIREBASE.firestore();
const googleAuthProvider = new FIREBASE.auth.GoogleAuthProvider();
export { dataBase, googleAuthProvider, FIREBASE };
const ROOT = document.getElementById("root");
const App = () => {
  return (
    <>
      <JournalApp />
    </>
  );
};

ReactDOM.render(<App />, ROOT);
