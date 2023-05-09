import { React, useState, useEffect } from 'react';
import { Selecionadores } from './OperacaoInputs';
import { formCurrency } from '../../../../AA-utilidades/numeros';
import { api } from '../../../../../conecções/api';
import '../../../../Estilos/styleForList.css'

export default function Salgadas({ selectedSabores, setSelectedSabores }) {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    api
      .get('/lanches')
      .then((getdata) => {
      setProduto(getdata.data);
    });
  }, []);
   
  return (
    <div className='lista' id='salgadas'>
                    <label className='titulo-lista'>SALGADAS</label>
                <div className='todos-items-lista'>
            {produto.map((itempizza)=>  
                <div className="carde">
                    <div className="carde-inner">
                        <div className='box-item-List'>
                            <div className='item-List-info'>
                                <div className='bloco-item-info'>
                                    <div className='box-name'>
                                        <div className='item-info-name'>{itempizza.nome}</div>
                                    </div>
                                    <div className='item-info-valor'>
                                        <div>Valor</div>
                                        <div>{formCurrency.format(itempizza.valor)}</div>
                                    </div>
                                </div> 
                                <div className='item-info-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{itempizza.descricao}</div>
                            </div>
                            <div className='box-List-img'>
                                <div className='item-img'>
                                    <Selecionadores
                                        itempizza={itempizza}
                                        selectedSabores={selectedSabores}
                                        setSelectedSabores={setSelectedSabores}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}    
            </div>
        </div> 
  );
}