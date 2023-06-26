import React, { useEffect } from 'react';
import Decimal from 'decimal.js';

export default function AdicionaisPorCheckbox({ faltam, item, index, listaAdicionais, setListaAdicionais }) {
  

  const selecionarAdicional = (index) => { 
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    if (quantidade.gt(0)) {
      updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
    } else {
      updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
    }
    setListaAdicionais(updatedListaOpcionais);
  };

  const isCheckboxDisabled = faltam === 0 && item.quantidade === 0;

  return (
    <div>
      <input
        type="checkbox"
        disabled={isCheckboxDisabled}
        checked={item.quantidade === 1}
        onChange={() => selecionarAdicional(index)}
      />
    </div>
  );
}
