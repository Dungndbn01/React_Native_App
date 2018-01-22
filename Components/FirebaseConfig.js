import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyClTnYLV0Ns_P3JSAvAsJUETJlU5M2v2Xs",
    authDomain: "react-native-app-cff3c.firebaseapp.com",
    databaseURL: "https://react-native-app-cff3c.firebaseio.com",
    projectId: "react-native-app-cff3c",
    storageBucket: "react-native-app-cff3c.appspot.com",
    messagingSenderId: "999983732662"
};

export const firebaseApp = firebase.initializeApp(config);