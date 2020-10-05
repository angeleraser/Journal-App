/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind/tailwind.output.css";
import { JournalApp } from "./JournalApp";
import "./css/styles.scss";
import { firebaseModule } from "./firebase/firebase-config";
export const {
  dataBase,
  googleAuthProvider,
  firebase: FIREBASE,
} = firebaseModule(firebase);
const ROOT = document.getElementById("root");
const App = () => {
  return (
    <>
      <JournalApp />
    </>
  );
};

ReactDOM.render(<App />, ROOT);
