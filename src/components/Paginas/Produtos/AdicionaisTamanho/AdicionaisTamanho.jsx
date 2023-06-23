import { React, useEffect, useState } from 'react'
import { formCurrency } from '../../../AA-utilidades/numeros';
import { SelecionarTamanho } from './SelecionarTamanho'
import { api } from '../../../../conecções/api'
import { useLocation } from 'react-router-dom';
import './adicionaistamanho.css'

export default function GrupoTamanho({ setExisteTamanho, setTamanhoEscolhido }){
  const [grupoTamanho, setGrupoTamanho] = useState([]);
  const { state } = useLocation();
  const { data } = state;

  useEffect(()=>{
    if(Array.isArray(grupoTamanho)){
      setExisteTamanho(true)
    } else{
      setExisteTamanho(false)
    }
  }, [grupoTamanho])

  useEffect(()=>{
    api
        .get(`/listaTamanhos/${data.ID_PRODUTO}`)
        .then((getdata)=>{
            setGrupoTamanho(getdata.data);
        });
  }, []);
 
    return(
        <div>
          <div>{Array.isArray(grupoTamanho) ? (
              <div className='titulo-Tamanhos'> TAMANHOS </div>
            ) : (
              <div></div>
            )}
          </div>    
          <div className='lista-tamanhos'> 
            {Array.isArray(grupoTamanho)
              ? grupoTamanho.map((item, index) => (
                  <div className='Card-tamanhos' key={item.ID}>
                        <div className='box-tamanhos-1'>
                          <div className='tamanhos-nome'>{item.TAMANHO}</div>
                        </div>
                        <div className='box-tamanhos-2'>
                          <div className='tamanhos-valor'>{formCurrency.format(item.VALOR_VENDA)}</div>
                        </div>
                      <div className='Card-Icon'>
                          <SelecionarTamanho
                            item={item}
                            setTamanhoEscolhido={setTamanhoEscolhido}
                          />
                      </div>
                  </div>
                ))
              : null}
            </div> 
        </div>
    )

}