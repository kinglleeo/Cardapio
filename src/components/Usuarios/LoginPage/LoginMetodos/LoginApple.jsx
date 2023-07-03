import React from 'react'
import './lloginapple.css'
import { useEffect } from 'react';

const clientId = "com.babychakra.alpha1.client";
const scope = "name email";
const redirectURI = "https://tbvpnc.csb.app/";
const state = "origin:web";

export default function LoginApple(){

    useEffect(() => {
        window.AppleID.auth.init({
          clientId,
          scope,
          redirectURI,
          state,
          usePopup: false
        });
    
        document.addEventListener("AppleIDSignInOnSuccess", (event) => {
          console.log("Success ", event);
        });
    
        document.addEventListener("AppleIDSignInOnFailure", (event) => {
          console.log("Error ", event);
        });
      }, []);

    return(
        <div>
            <div
                id="appleid-signin"
                className="signin-button"
                data-color="black"
                data-border="true"
            > </div>
        </div>
    )
}