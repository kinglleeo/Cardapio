import React, { useEffect } from 'react'
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from './firebaseConfig';
import { handleCredentialResponse } from './Login';

export default function LoginGoogle(){
    
    $(document).ready( function () {
        google.accounts.id.initialize({
            client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
            ux_mode: "redirect", 
            login_uri: "http://localhost:3000/login"
        })
            
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { 
                type: "standard", 
                shape:"rectangular", 
                theme: "filled_blue", 
                text:"Continuar com o Google", 
                size: "large", 
                logo_alignment:"left", 
                width:"100%",
            } 
        );        
    });
    
    function Login(response) {
        const idToken = response.credential;
        const credential = GoogleAuthProvider.credential(idToken);

        signInWithCredential(auth, credential).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
      }

    return(
        <div id='buttonDiv'></div>
    )
}