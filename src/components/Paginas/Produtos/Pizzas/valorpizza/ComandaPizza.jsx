import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MostrarSelecionados } from '../sabores-pizza/OperacaoInputs';
import { Total } from '../sabores-pizza/OperacaoInputs';
import './styleComandaPizza.css';

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
            windowheight > 80? setComandabar('comanda-bar-selecionados-top') : setComandabar('relative')
        }
    }  

  return (
  <div>
    <div className='comanda-main'>
        <div className='bloco-info-comanda'>
          <div className='box-info-comanda'>
            <div className='comanda-tamanho'>
              <div>Pizza {tamanhopizza.tamanho}</div>
            </div>
            <div className='comanda-total'>
              <Total 
                selectedSabores={selectedSabores}
                tamanhopizza={tamanhopizza}
              />
            </div>
          </div>
        </div>
        <div className={`${comandabar}`}>
          <div className='comanda-bar-selecionados'>
              {selectedSabores.map((item, index) => (
                <div className='comanda-selecionados'>
                  <div key={index} className='box-selecionados'>
                      <div>{item.nome}</div>
                    <MostrarSelecionados
                      selectedSabores={selectedSabores}
                      setSelectedSabores={setSelectedSabores}
                      index={index}
                    />
                  </div> 
                </div>
              ))}
          </div>
        </div>
    </div>
  </div>
  );
  }