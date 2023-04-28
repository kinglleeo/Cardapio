import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Selecionadores } from './OperacaoInputs'
import '../../../../Estilos/Style.css'

export default function Salgadas({ selectedSabores, setSelectedSabores }) {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    axios
      .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
      .then((getdata) => {
      setProduto(getdata.data);
    });
  }, []);
   
  return (
    <div className='lista-items' id='salgadas'>
                    <label className='titulo-lista'>SALGADAS</label>
            {produto.map((itempizza)=>  
                <div className="carde">
                    <div className="circle"></div>
                            <div className="carde-inner">
                                <div className='caixa-pro'>
                                    <div className='caixa-pro-1'> 
                                    <div>
                                        <div className='item-f-nome'>{itempizza.nome}</div>
                                        <div className='item-f-descricao'>{itempizza.descricao}</div>
                                    </div>
                                    </div>
                                    <div className='caixa-pro-22'>
                                        <Selecionadores 
                                            itempizza={itempizza}
                                            selectedSabores={selectedSabores}
                                            setSelectedSabores={setSelectedSabores}  
                                        />
                                    </div>
                                    <div className='caixa-pro-2'>
                                        <div className='item-f-img'></div>
                                    </div>
                                </div>
                            </div>
            </div>
            )}    
        </div> 
  );
}