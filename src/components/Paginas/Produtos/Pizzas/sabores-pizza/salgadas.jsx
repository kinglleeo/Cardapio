import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Selecionadores } from './OperacaoInputs'

export default function Salgadas({ selectedItems, setSelectedItems }) {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    axios
      .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
      .then((getdata) => {
      setProduto(getdata.data);
    });
  }, []);
  
  return (
    <div className="caixa-lista" id="salgadas">
      <label className="titulo-lista">Salgadas</label>
      {produto.map((itempizza) => (
        <div className="caixa-css" key={itempizza.id}>
          <div className="caixa-items">
            <div className="caixa-1">
              <div className="item-nome">{itempizza.nome}</div>
              <div className="item-descricao">{itempizza.descricao}</div>
            </div>
            <div className="caixa-2">
                <Selecionadores 
                  itempizza={itempizza}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}  
                />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}