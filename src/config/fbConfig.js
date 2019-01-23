import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBJDYR7kt8SaUCVMjSkQx5EqzmBbP0DjTA",
  authDomain: "werstern-marioplan.firebaseapp.com",
  databaseURL: "https://werstern-marioplan.firebaseio.com",
  projectId: "werstern-marioplan",
  storageBucket: "werstern-marioplan.appspot.com",
  messagingSenderId: "743181147133"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
