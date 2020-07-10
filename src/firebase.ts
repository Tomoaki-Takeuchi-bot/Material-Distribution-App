import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';

var firebaseConfig = {
  apiKey: 'AIzaSyC1jAa-Vw10_rzQ2JCJFgbO5V77phTwCx4',
  authDomain: 'distribution-site-fa7b2.firebaseapp.com',
  databaseURL: 'https://distribution-site-fa7b2.firebaseio.com',
  projectId: 'distribution-site-fa7b2',
  storageBucket: 'distribution-site-fa7b2.appspot.com',
  messagingSenderId: '166152179690',
  appId: '1:166152179690:web:8a80e7df8192239e09ac93',
  measurementId: 'G-MJ7G38ZS88',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
