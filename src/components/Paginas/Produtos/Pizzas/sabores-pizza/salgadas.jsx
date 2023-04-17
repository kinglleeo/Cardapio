import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Salgadas({  selectedItems, setSelectedItems }) {
  const [produto, setProduto] = useState([]);
  const { state } = useLocation();
  const { tamanhopizza } = state;

  useEffect(() => {
    axios.get('https://642b23b0d7081590f91d081a.mockapi.io/lanches').then((getdata) => {
      setProduto(getdata.data);
    });
  }, []);
  

  const handleCheckboxChange = (event, itempizza) => {
    const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-sabor"]:checked')).map(
      (checkbox) => checkbox.value
    );
    if (checkboxValues.length >= tamanhopizza.quantia) {
      document.querySelectorAll('input[name="selecionar-sabor"]:not(:checked)').forEach((checkbox) => {
        checkbox.disabled = true;
      });
    } else {
      document.querySelectorAll('input[name="selecionar-sabor"]').forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    if (event.target.checked) {
      setSelectedItems([...selectedItems, itempizza]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item.id !== itempizza.id));
    }
  };

  return (
    <div className="caixa-lista" id="pizza1">
      <label className="titulo-lista">Salgadas</label>
      {produto.map((itempizza) => (
        <div className="caixa-css" key={itempizza.id}>
          <div className="caixa-items">
            <div className="caixa-1">
              <div className="item-nome">{itempizza.nome}</div>
              <div className="item-descricao">{itempizza.descricao}</div>
            </div>
            <div className="caixa-2">
            <input
                type="checkbox"
                name="selecionar-sabor"
                id={itempizza.id} 
                onChange={(event) => handleCheckboxChange(event, itempizza)}
                checked={selectedItems.some((item) => item.id === itempizza.id)}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}