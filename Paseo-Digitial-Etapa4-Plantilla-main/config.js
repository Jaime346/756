import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí
const firebaseConfig = {
    apiKey: "AIzaSyBoRvYf-_NRhkw3zYkjxzfBgmJIMufR66Q",
    authDomain: "bicicleta-d1ee6.firebaseapp.com",
    databaseURL: "https://bicicleta-d1ee6-default-rtdb.firebaseio.com",
    projectId: "bicicleta-d1ee6",
    storageBucket: "bicicleta-d1ee6.appspot.com",
    messagingSenderId: "1091609800416",
    appId: "1:1091609800416:web:f55fdcd3e986fd9a9aea85"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


