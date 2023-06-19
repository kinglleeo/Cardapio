import { React, useState, useEffect } from 'react'
import { GoogleAuthProvider } from 'firebase/auth';
//import { auth } from '../Firebase/firebaseConfig';
import { getAuth, getRedirectResult } from "firebase/auth";

export default function LoginTeste(){
    
    

    window.onload = function () {
        google.accounts.id.initialize({
          client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
          login_uri: 'https://identitytoolkit.googleapis.com',
          ux_mode: "redirect"
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
      }

    return(
        <div>
            <div id="buttonDiv"></div>
        </div>
    )
}