import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getUiConfig, startUi } from 'firebaseui';

// Configure sua inicialização do Firebase
const firebaseConfig = {
  // Sua configuração do Firebase aqui
};

const app = initializeApp(firebaseConfig);

// Crie uma instância do Firebase Authentication
const auth = getAuth(app);

// Crie uma instância do provedor de login do Google
const googleProvider = new GoogleAuthProvider();

// Configure as opções de autenticação do FirebaseUI
const uiConfig = getUiConfig({
  signInSuccessUrl: '/página-de-sucesso', // URL para redirecionar após o login com sucesso
  signInOptions: [
    // Adicione aqui outras opções de provedores de login, se desejar
    googleProvider // Usuário pode fazer login com o Google
  ]
});

// Adicione o evento de clique ao botão de login com o Google
document.getElementById('login-with-google').addEventListener('click', () => {
  signInWithRedirect(auth, googleProvider); // Redirecione o usuário para o fluxo de login com o Google
});

// Inicie o FirebaseUI
startUi('#firebaseui-auth-container', uiConfig);
