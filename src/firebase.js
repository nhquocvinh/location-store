import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCh61olIe9qlBV_KYOziCrWZCHNUWFVayI',
  authDomain: 'mark-location-75345.firebaseapp.com',
  databaseURL: 'https://mark-location-75345.firebaseio.com',
  storageBucket: 'mark-location-75345.appspot.com',
  messagingSenderId: '156451321181',
};

firebase.initializeApp(config);

export default firebase;
