import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'
import { useNavigate } from 'react-router-dom';

export default function LoginSociais () {
  const navigate = useNavigate()  
  

  useEffect(() => {
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
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl){
          navigate('/Main')
        }},
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: 'select_account', 
          },
        },
      ],
    };

    const ui = firebaseui.auth.AuthUI.getInstance() 
          || new firebaseui.auth.AuthUI(firebase.auth());
    
    ui.start('#firebaseui-auth-container', uiConfig);
    
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
    </div>
  )
};
