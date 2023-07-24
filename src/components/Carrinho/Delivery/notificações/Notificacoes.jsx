import { React, useState, useEffect } from 'react'
import { api } from '../../../../conecções/api';
import { auth } from '../../../Usuarios/LoginPage/Firebase/firebaseConfig';
import ModalError from '../../../erros/ModalError'

export default function notificacoes(){
    const [user, setUser] = useState('');
    const [listaPedidos, setListaPedidos] = useState([]);
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            setUser(user)
            const uidToken = user.uid
            api
                .get(`/listaPedidosCliente/${uidToken}`)
                .then((getdata)=>{
                    setListaPedidos(getdata.data);
                })
                .catch((error) => {
                    setError(error.message)
                    setModalError(true)
                });
        });
    }, []);

    return(
        <div>
            {modalError && <ModalError setModalError={setModalError} error={error} />}
        </div>
    )
}