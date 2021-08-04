import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBt_-qR4yUljTYUxvPw-LffFAM4kQ7hxPI",
    authDomain: "foodapp-expo.firebaseapp.com",
    projectId: "foodapp-expo",
    storageBucket: "foodapp-expo.appspot.com",
    messagingSenderId: "411291054247",
    appId: "1:411291054247:web:f20e7af06d1a0943c92b82"
  };
    firebase.initializeApp(firebaseConfig);
 const db=firebase.firestore();
 const auth=firebase.auth();
 const storage=firebase.storage();
 export {db,auth,storage};
 export default firebase
