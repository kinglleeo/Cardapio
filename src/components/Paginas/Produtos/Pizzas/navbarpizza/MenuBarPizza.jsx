import { React, useState, useEffect } from 'react'
import './menubarpizza.css'



    

export const handleSelecionarSabor = (event) => {
    const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar"]:checked')).map((checkbox) => checkbox.value);
  
    if (checkboxValues.length >= 4) {
      document.querySelectorAll('input[name="selecionar"]').forEach((checkbox) => {
        checkbox.disabled = true;
      });
    }
  };  


export default function MenuBar(){
  const [tamanho, setTamanho] = useState('')
  const [tamanhoDescricao, setTamanhoDescricao] = useState('')
  const [tamanhoValor, setTamanhoValor] = useState('')

    

  useEffect(()=>{
      const tamanho = localStorage.getItem('tamanho')
          setTamanho(tamanho)
      const tamanhoDescricao = localStorage.getItem('tamanhoDescricao')
          setTamanhoDescricao(tamanhoDescricao)
      const tamanhoValor = localStorage.getItem('tamanhoValor')
          setTamanhoValor(tamanhoValor)
  })

    //fixar barra de navegação
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 80) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });

  return(
    <div>
                <div className='navbar'>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('salgadas').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Salgadas</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('especiais').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Especiais</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('nobres').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Nobres</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('tradicionais').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Tradicionais</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('doces').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Doces</label>
                    </div> 
                    <div className='header-pedido'>
                        <div className='caixa-header'>
                            <div className='caixa-h-1'>
                                <div className='item-h-tamanho'>{tamanho}</div>
                                <div className='item-h-descricao'>{tamanhoDescricao}</div>
                            </div>
                            <div className='caixa-h-2'>
                                <div className=''>{'saborEscolhido1'}</div>
                                <div className=''>{'saborEscolhido2'}</div>
                                <div className=''>{'saborEscolhido3'}</div>
                                <div className=''>{'saborEscolhido4'}</div>
                            </div>
                            <div className='caixa-h-3'>
                                <div className='item-h-valor'><label>Valor Total</label>R${}</div>
                                <div className='item-h-botao'>
                                    <button className='botao-comprar'>Finalizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                                   
                </div>
            </div>
  )
}