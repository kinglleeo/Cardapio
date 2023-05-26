
import React, { useEffect } from 'react';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth } from './firebaseConfig';


export default function LoginGoogle() {
    
    window.onload = function () {
      
      window.google.accounts.id.initialize({
        client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
        ux_mode: "redirect",
      });
        
        getRedirectResult(auth)
      window.google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
        type: 'standard',
        shape: 'rectangular',
        theme: 'filled_blue',
        text: 'Continuar com o Google',
        size: 'large',
        logo_alignment: 'left',
        width: '100%',
      });
      window.google.accounts.id.prompt(); 
    }

  return (
     <div id="buttonDiv"></div>
    )
}
