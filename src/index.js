import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoEOSItVBDWtjhGQf-mzNMzfxQxnIMMwo",
  authDomain: "portfolio-21877.firebaseapp.com",
  databaseURL: "https://portfolio-21877-default-rtdb.firebaseio.com",
  projectId: "portfolio-21877",
  storageBucket: "portfolio-21877.appspot.com",
  messagingSenderId: "224561439330",
  appId: "1:224561439330:web:825b94bacc4620c7b7673b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

