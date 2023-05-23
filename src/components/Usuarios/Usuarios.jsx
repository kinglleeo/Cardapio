import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';

import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBDEDA0OOXbRvb_oYARfYB2y9d7k0azFd0",
    authDomain: "cardapio-7f6f7.firebaseapp.com",
    projectId: "cardapio-7f6f7",
    storageBucket: "cardapio-7f6f7.appspot.com",
    messagingSenderId: "911950946349",
    appId: "1:911950946349:web:4e61a6528a01b9572118a4",
    measurementId: "G-1867XM13QC"
};

firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export default function Usuarios() {
  useEffect(() => {
    const provider = new GoogleAuthProvider();

    // Detecting the user's device type
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      // Sign in with Google account for Android
      signInWithPopup(auth, provider)
        .then((result) => {
          // Handle successful authentication
          const user = result.user;
          console.log('Signed in with Google:', user);
        })
        .catch((error) => {
          // Handle authentication errors
          console.error('Google authentication error:', error);
        });
    } else if (isIOS) {
      // Sign in with Apple account for iOS
      // Implement Apple authentication logic here
      console.log('iOS device detected');
    }
  }, []);

  return <div></div>;
}
