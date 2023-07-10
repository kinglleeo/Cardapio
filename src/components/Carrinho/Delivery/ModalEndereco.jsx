import { React, useState, useEffect } from 'react'
import './modalendereco.css'


export default function ModalEndereco({ setOpenCadastroEndereco }){
    const [cep, setCep] = useState('');
    const [tipoEndereco, setTipoEndereco] = useState('')
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [enderecoCompleto, setEnderecoCompleto] = useState('');

    

    return(
        <>
        <div className='modalEndereco' onClick={()=> setOpenCadastroEndereco(false)}/>
            <div className='centeredEndereco'>
                <div className='endereco'>
                    <div className='enderecoTitulo'> 
                        <div> Cadastrar Endereço </div>
                        <div className='iconeFechar'  onClick={()=> setOpenCadastroEndereco(false)}></div>
                    </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Cep' onChange={e=> setCep(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Identificação' onChange={e=> setTipoEndereco(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Rua' onChange={e=> setRua(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Numero' onChange={e=> setNumero(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Bairro' onChange={e=> setBairro(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Complemento' onChange={e=> setComplemento(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Cidade' onChange={e=> setCidade(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <div className='espacoEndereco'>
                                <div className='boxCadastroEndereco'>
                                    <input className='inputCadastroEndereco' placeholder='Estado' onChange={e=> setEstado(e.target.event)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='ContentEndereco'>
                            <button className='btnCadastrarEndereco'> Cadastrar </button>
                        </div>
                </div>
            </div>
        </>
    )
}