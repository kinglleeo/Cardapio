import { React, useState, useEffect } from 'react'
import './funcoescarrinho.css'

export default function FunçõesCarrinho({ setOpçaoEscolhidaGarcom, setNumeroComandaGarcom}){
    const [idGarcom, setIdGarcom] = useState(null)
    const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);
    const [login, setLogin] = useState('');
    const mesa = "MESA";
    const cartao = "CARTAO";
    
    useEffect(()=>{
        const idGarcom = localStorage.getItem('idgarcom');
          setIdGarcom(idGarcom)
        const login = localStorage.getItem('login')
            setLogin(login);
    }, [])

    const RadioOpcao = (mesa, cartao) => {
        setSelectedRadioIndex(mesa, cartao);
        setOpçaoEscolhidaGarcom(mesa, cartao)
    };

    return(
        <div>
            {idGarcom !== null || login === "TERMINAL" ? (
                <div className='quandroFuncaoGarcom'>
                    <div className='itemsQuandroFuncaoGarcom' onClick={() => RadioOpcao(mesa)}> 
                            <div className='FuncaoGarcom-text'> Mesa </div>
                            <div className='FuncaoGarcom-Icon'>
                                <input type='radio' name='opcao' className={selectedRadioIndex === "MESA" ? ('FuncaoGarcom-acesso') : ('FuncaoGarcom-apagado')} checked={selectedRadioIndex === "MESA"} onChange={() => {}}/>
                            </div>
                    </div>
                    <div className='itemsQuandroFuncaoGarcom' onClick={() => RadioOpcao(cartao)}> 
                            <div className='FuncaoGarcom-text'> Cartao </div>
                            <div className='FuncaoGarcom-Icon'>
                                <input type='radio' name='opcao' className={selectedRadioIndex === "CARTAO" ? ('FuncaoGarcom-acesso') : ('FuncaoGarcom-apagado')} checked={selectedRadioIndex === "CARTAO"} onChange={() => {}}/>  
                            </div>
                    </div>
                    <div className='itemsQuandroFuncaoGarcom'> 
                        <input className='inputNumeroComanda' placeholder='n° comanda' onChange={e => setNumeroComandaGarcom(e.target.value)}>
                    </input> </div>
                </div>
            ) : null}
        </div>
    )
}