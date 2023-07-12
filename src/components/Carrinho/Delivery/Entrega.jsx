import { React, useState, useEffect } from 'react'
import '../../../Styles/StyleCarrinho.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../Usuarios/LoginPage/Firebase/firebaseConfig';

export default function Entrega(){
    const [delivery, setDelivery] = useState('')
    const [user, setUser] = useState('');
    const enderecoCompleto = [{
        identificacao: 'casa',
        rua: 'Republica Argentina',
        numero: '1077',
        bairro: 'Princesa Isabel',
        cidade: 'Santo Antonio do Sudoeste', 
        estado: 'Paraná',
        cep: '85710-000',
    }]
    
    useEffect(()=>{
        const usuario = onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
    }, []);


    useEffect(()=>{
        const delivery = localStorage.getItem('delivery')
            setDelivery(delivery)
    })

    return(
        <div>
            {delivery === "SIM" && user !== null ? (
                <div className='listaEndereço'>
                    <div className='cartTitulo entregaTitulo'> 
                        <div className='iconeEnomeLocalizacao'>
                            <div className='iconeEntrega'></div>
                            <div className='carrinhoName'> Endereço </div>
                        </div>
                        <button className='btnEntrega' onClick={()=> setOpenCadastroEndereco(true)}> novo  </button>
                    </div>
                    <div>
                        {Array.isArray(enderecoCompleto) ?
                            enderecoCompleto.map((item)=>
                                <div className='caixaEndereco'>
                                    <div className='textoEndereco'> Identificação: {item.identificacao} </div>
                                    <div className='textoEndereco'> Rua: {item.rua} </div>
                                    <div className='textoEndereco'> Bairro: {item.bairro} </div>
                                    <div className='textoEndereco'> Cidade: {item.cidade} </div>
                                    <div className='textoEndereco'> Estado: {item.estado} </div>
                                    <div className='textoEndereco'> Cep: {item.cep} </div>
                                    <div className='btnCaixaEditar'>
                                        <button className='btnEditar' onClick={()=> setOpenEditarEndereco(true)} > Editar </button>
                                    </div>
                                </div>
                            ): null}
                    </div>
                   
                </div>
            ) : null}
        </div>
    )
}