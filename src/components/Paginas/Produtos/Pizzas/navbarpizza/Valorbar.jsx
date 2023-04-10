import { React, useState, useEffect } from 'react';
import './StyleBarPizza.css';

export default function ValorBar(){
    const [tamanho, setTamanho] = useState('');
    const [tamanhoDescricao, setTamanhoDescricao] = useState('');
    const [tamanhoValor, setTamanhoValor] = useState('');
    const [quantidadeSabores, setQuantidadeSabores] = useState('');       
    const [sabor, setSabor] = useState('')
    console.log(sabor)
    
    useEffect(()=>{
        const tamanho = localStorage.getItem('tamanho');
        setTamanho(tamanho);
        const tamanhoDescricao = localStorage.getItem('tamanhoDescricao');
        setTamanhoDescricao(tamanhoDescricao);
        const tamanhoValor = localStorage.getItem('tamanhoValor');
        setTamanhoValor(tamanhoValor);
        const quantidadeSabores = localStorage.getItem('quantidadeSabores');
            setQuantidadeSabores(quantidadeSabores)
        const sabor = localStorage.getItem('sabor')
            setSabor(sabor)
    }, []);

   

    return(
        <div className='header-pedido'>
            <div className='caixa-header' key={null}>
                <div className='caixa-h-1'>
                    <div className='item-h-tamanho'>{tamanho}</div>
                    <div className='item-h-descricao'>{tamanhoDescricao}</div>
                </div>
                <div className='caixa-h-2'>
                    <div>{sabor}</div>
                    <div className='q-sabores'>{quantidadeSabores}</div>
                </div>
                <div className='caixa-h-3'>
                    <div className='item-h-valor'><label>Valor Total</label>R${}</div>
                    <div className='item-h-botao'>
                        <button className='botao-comprar'>Finalizar</button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}