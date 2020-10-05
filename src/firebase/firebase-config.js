const firebaseConfig = {
  apiKey: "AIzaSyA2Iges9_vdmAjZ6k0CXQj9Z5VE1rtvT4k",
  authDomain: "react-apps-139bb.firebaseapp.com",
  databaseURL: "https://react-apps-139bb.firebaseio.com",
  projectId: "react-apps-139bb",
  storageBucket: "react-apps-139bb.appspot.com",
  messagingSenderId: "793702707855",
  appId: "1:793702707855:web:ccb866ae82f727f0f1f6fa",
};
export const firebaseModule = (firebase) => {
  firebase.initializeApp(firebaseConfig);
  const dataBase = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return { dataBase, googleAuthProvider, firebase };
};
