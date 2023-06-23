import React, { useEffect } from 'react';
import Decimal from 'decimal.js';

export default function AdicionaisPorCheckbox({ faltam, item, index, setQuantidadeTotal, listaAdicionais, setListaAdicionais }) {
  useEffect(() => {
    if (Array.isArray(listaAdicionais)) {
      const total = listaAdicionais.reduce((accumulator, item) => accumulator + item.quantidade, 0);
      setQuantidadeTotal(total);
    }
  }, [listaAdicionais]);

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
        checked={item.quantidade === 1} // Add this line to check the checkbox if quantidade === 1
        onClick={() => selecionarAdicional(index)}
      />
    </div>
  );
}
