import { React, useEffect, useState } from 'react'
import { formCurrency } from '../../../AA-utilidades/numeros';
import { api } from '../../../../conecções/api'
import { useLocation } from 'react-router-dom';
import '../../../../Styles/StyleForAdicionais.css'

export default function GrupoTamanho({ setExisteTamanho, setTamanhoEscolhido }){
  const [grupoTamanho, setGrupoTamanho] = useState([]);
  const { state } = useLocation();
  const { data } = state;
  const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);

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
 
  const RadioTamanhos = (item, index) => {
    setSelectedRadioIndex(index);
    setTamanhoEscolhido(item)
  };

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
                <div
                  className={`Card-tamanhos ${selectedRadioIndex === index ? 'mudarCorCard' : ''}`}
                  key={item.ID}
                  onClick={() => RadioTamanhos(item, index)}
                >
                <div className='box-tamanhos-1'>
                  <div className='tamanhos-nome'>{item.TAMANHO}</div>
                </div>
                <div className='box-tamanhos-2'>
                  <div className='tamanhos-valor'>{formCurrency.format(item.VALOR_VENDA)}</div>
                </div>
                <div className='Card-Icon'>
                  <input type='radio' name='tamanhos' checked={selectedRadioIndex === index} onChange={() => {}}/>
                    {selectedRadioIndex === index 
                      ? (<div className='iconePrato-acesso'></div>)
                      : (<div className='iconePrato-apagado'></div>) 
                    }
                </div>
              </div>
                ))
              : null}
            </div> 
        </div>
    )

}