import { React, useState, useEffect } from 'react'
import './funcoescarrinho.css'


export default function FunçõesCarrinho(){
    const [idGarcom, setIdGarcom] = useState(null)
    const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);
    const [opcaoEscolhida, setOpçaoEscolhida] = useState(null);
    console.log(opcaoEscolhida)
    const mesa = "MESA";
    const cartao = "CARTAO";

    useEffect(()=>{
        const idGarcom = sessionStorage.getItem('idgarcom');
          setIdGarcom(idGarcom)
      }, [])

    const RadioOpcao = (mesa, cartao) => {
        setSelectedRadioIndex(mesa, cartao);
        setOpçaoEscolhida(mesa, cartao)
    };

    return(
        <div>
            {idGarcom !== null ? (
                <div className='quandroFuncaoGarcom'>
                    <div className='itemsQuandroFuncaoGarcom' onClick={() => RadioOpcao(mesa)}> 
                        <div>
                            <div> Mesa </div>
                            <div className='Card-Icon'>
                                <input type='radio' name='opcao' checked={selectedRadioIndex === "MESA"} onChange={() => {}}/>
                                    {selectedRadioIndex === "MESA"
                                    ? (<div className='iconePrato-acesso'></div>)
                                    : (<div className='iconePrato-apagado'></div>) 
                                    }
                            </div>
                        </div>
                    </div>
                    <div className='itemsQuandroFuncaoGarcom' onClick={() => RadioOpcao(cartao)}> 
                        <div>
                            <div> cartao </div>
                            <div className='Card-Icon'>
                                <input type='radio' name='opcao' checked={selectedRadioIndex === "CARTAO"} onChange={() => {}}/>
                                    {selectedRadioIndex === "CARTAO"
                                    ? (<div className='iconePrato-acesso'></div>)
                                    : (<div className='iconePrato-apagado'></div>) 
                                    }
                            </div>
                        </div>
                    </div>
                    <div className='itemsQuandroFuncaoGarcom'> <input className='inputNumeroComanda' placeholder='n° comanda'></input> </div>
                </div>
            ) : null}
        </div>
    )
}