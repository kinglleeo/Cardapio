import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Firebase/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function PaginaLoadLogin() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    const usuario = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

useEffect(() => {
  if (user) {
    const userUid = user.uid;
    const userDocRef = doc(db, 'usuarios', userUid);

    getDoc(userDocRef)
      .then((docSnapshot) => {
        if (!docSnapshot.exists()) {
          setDoc(userDocRef, {
            id: userUid,
            nome: user.displayName,
            email: user.email,
          })
            .then(() => {
              console.log('Cadastro criado com sucesso!');
            })
            .catch((error) => {
              console.error('Erro ao criar o cadastro:', error);
            });
        } else {
          console.log('Usuário já possui um cadastro.');
        }
      })
      .catch((error) => {
        console.error('Erro ao verificar o documento do usuário:', error);
      });
  }
}, [user]);


  return <div></div>;
}
