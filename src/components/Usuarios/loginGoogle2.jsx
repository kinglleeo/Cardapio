import React from 'react'
import { auth } from './firebaseConfig';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';


export default function LoginGoogle2(){

    function handleCredentialResponse(response) {
        const idToken = response.credential;
        const credential = GoogleAuthProvider.credential(idToken);
        signInWithCredential(auth, credential)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
      }
      window.onload = function () {
        google.accounts.id.initialize({
          client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { 
            type: "standard",
            shape: "rectangular",
            theme: "filled_blue",
            text: "Continuar com o Google",
            size: "large",
            logo_alignment: "left",
            width: "100%",
        } 
        );
        google.accounts.id.prompt(); 
      }


    return(
        <div id="buttonDiv"></div> 
    )
    }