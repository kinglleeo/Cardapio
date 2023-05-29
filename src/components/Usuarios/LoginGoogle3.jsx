import { React, useEffect} from 'react'

import { auth } from './firebaseConfig'
import { getRedirectResult, GoogleAuthProvider } from 'firebase/auth'



export default function LoginGoogle3(){
      
        window.onload = function () {
        google.accounts.id.initialize({
            client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
            ux_mode: "redirect",
            //login_uri: "https://cardapio-7f6f7.firebaseapp.com",
            login_uri: "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000"
          });
          
        google.accounts.id.renderButton(
          document.getElementById("btnGoogle"),
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
        <div id="btnGoogle"></div> 
    )
    }