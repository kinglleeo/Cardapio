import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Selecionadores } from './OperacaoInputs'
import '../../../../Estilos/Style.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';

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
                            <div className="carde-inner">
                            <div className='caixa-pro'>
                        <div className='caixa-pro-1'>
                            <div className='bloco-caixa-pro-1'>
                                <div className='bloco-pro-name'>
                                    <div className='item-f-nome'>{itempizza.nome}</div>
                                </div>
                                <div className='item-f-valor'>
                                    <div>Valor</div>
                                    <div>{formCurrency.format(itempizza.valor)}</div>
                                </div>
                            </div> 
                            <div className='item-f-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{itempizza.descricao}</div>
                        </div>
                        <div className='caixa-pro-2'>
                            <div className='item-f-img'>
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
  );
}