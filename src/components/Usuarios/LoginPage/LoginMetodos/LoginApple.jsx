import { signInWithRedirect, getRedirectResult, OAuthProvider  } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig'

export default function LoginApple(){
    const provider = new OAuthProvider('apple.com');
        provider.addScope('email');
        provider.addScope('name');
        provider.setCustomParameters({
            locale: 'br'
          });
    const LoginApple=()=>{
        signInWithRedirect(auth, provider);
    }   

    getRedirectResult(auth)
        .then((result) => {
            const credential = OAuthProvider.credentialFromResult(result);
            if (credential) {
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
            }
            const user = result.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = OAuthProvider.credentialFromError(error);
        });


}