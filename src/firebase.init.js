import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyDXwBBc07pFfdZ0nn7aD-RWuRp1Iz3Kf_o",
//     authDomain: "trade-villa.firebaseapp.com",
//     projectId: "trade-villa",
//     storageBucket: "trade-villa.appspot.com",
//     messagingSenderId: "896099071919",
//     appId: "1:896099071919:web:5d5860a878863355dbe15a"
//   };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;