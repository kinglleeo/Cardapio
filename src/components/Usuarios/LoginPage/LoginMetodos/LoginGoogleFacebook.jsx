import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { auth } from '../Firebase/firebaseConfig'
import { GoogleAuthProvider } from 'firebase/auth'

export default function LoginSociais () {
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
    
    // Configuração do FirebaseUI
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: 'select_account', // Exibe a tela de seleção de conta
          },
        },
        {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: 'select_account',
          },
        },
      ],
      callbacks: {
        signInFailure: function(error) {
          if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
            return Promise.resolve();
          }
          var cred = error.credential;
          return firebase.auth().signInWithCredential(cred);
        }
      }
    
    };

    // Inicializa o FirebaseUI
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

