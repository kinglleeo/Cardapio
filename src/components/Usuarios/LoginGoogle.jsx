import React, { useEffect } from 'react'
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function LoginGoogle(){
    const navigate = useNavigate();

     $(document).ready( function () {
        window.google.accounts.id.initialize({
            client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
            callback: Login
        });
        window.google.accounts.id.renderButton(
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
        window.google.accounts.id.prompt(); 
              
    });
    
    
    function Login(response) {
        const idToken = response.credential;
        const credential = GoogleAuthProvider.credential(idToken);

        signInWithCredential(auth, credential)
            navigate('/')
        
      }

    return(
        <div id='buttonDiv'></div>
    )
}