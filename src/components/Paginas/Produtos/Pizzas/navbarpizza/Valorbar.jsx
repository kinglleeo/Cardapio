import { React, useState, useEffect } from 'react';
import './StyleBarPizza.css';
import axios from 'axios';
import SaboresEscolhidos from './SaboresEscolhidos'

export default function ValorBar(){
    const [tamanho, setTamanho] = useState('');
    const [tamanhoDescricao, setTamanhoDescricao] = useState('');
    const [tamanhoValor, setTamanhoValor] = useState('');
    const [quantidadeSabores, setQuantidadeSabores] = useState('');       
    const [adicionais, setAdicionais] = useState('')
   
    
    useEffect(()=>{
        const tamanho = localStorage.getItem('tamanho');
        setTamanho(tamanho);
        const tamanhoDescricao = localStorage.getItem('tamanhoDescricao');
        setTamanhoDescricao(tamanhoDescricao);
        const tamanhoValor = localStorage.getItem('tamanhoValor');
        setTamanhoValor(tamanhoValor);
        const quantidadeSabores = localStorage.getItem('quantidadeSabores');
            setQuantidadeSabores(quantidadeSabores)
    }, []);

    useEffect(()=>{
        axios
            .get('')
            .then((getdata)=>{
                setAdicionais(getdata.data)
            })
    })


    return(
        <div className='header-pedido'>
            <div className='caixa-header' key={null}>
                <div className='caixa-h-1'>
                    <div className='item-h-tamanho'>{tamanho}</div>
                    <div className='item-h-descricao'>{tamanhoDescricao}</div>
                </div>
                <div className='caixa-h-2'>
                    <SaboresEscolhidos/>
                </div>
                <div className='caixa-h-3'>
                    <div className='item-h-valor'><label>Valor Total</label>R${}</div>
                    <div className='item-h-botao'>
                        {adicionais === "" ? (<button className='botao-comprar'>Finalizar</button>) : (<button> Adicionais </button>)}
                    </div>
                </div>
               
            </div>
        </div>
    )
}