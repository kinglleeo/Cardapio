import { React, useEffect, useState } from 'react';
import './comanda-pizza.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MostrarSelecionados } from '../sabores-pizza/OperacaoInputs';
import { Total } from '../sabores-pizza/OperacaoInputs';

export default function ComandaPizza({ selectedSabores, setSelectedSabores}) {
  const { state } = useLocation()
  const { tamanhopizza } = state
  const navigate = useNavigate()
  const [comandabar, setComandabar] = useState('relative')

    useEffect(()=>{
        window.addEventListener('scroll', navbarComanda)
        return()=>{
            window.removeEventListener('scroll', navbarComanda)
        }
    }, [])
    const navbarComanda =()=>{
        if(window !== undefined){
            let windowheight = window.scrollY
            windowheight > 80? setComandabar('comanda-pizza-top') : setComandabar('relative')
        }
    }  

  return (
  <div className={`${comandabar}`}>
    <div className='comanda-items'>
        <div className='caixa-c'>
          <div className='item-c'>
            <div className='item-c-1'>
              <div>Pizza {tamanhopizza.tamanho}</div>
            </div>
            <div className='item-c-2'>
              <Total 
                selectedSabores={selectedSabores}
                tamanhopizza={tamanhopizza}
              />
            </div>
          </div>
        </div>
        <div className='caixa-d'>
          {selectedSabores.map((item, index) => (
            <div key={index} className='caixa-d-items'>
                <div>{item.nome}</div>
              <MostrarSelecionados
                selectedSabores={selectedSabores}
                setSelectedSabores={setSelectedSabores}
                index={index}
              />
            </div> 
          ))}
        </div>
    </div>
  </div>
  );
  }