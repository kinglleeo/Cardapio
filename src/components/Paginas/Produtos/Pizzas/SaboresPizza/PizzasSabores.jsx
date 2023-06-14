import React, { useState } from 'react';
import Header from '../../../../header/Header';
import GruposDeSabores from './GrupoDeSabores';

export default function Adicionais({ quantidadeTotal, setQuantidadeTotal, setValorTotalSabores, setSaboresSelecionados, SaboresSelecionados  }) {
  
  return (
    <div>
      <div>
        <GruposDeSabores
            setValorTotalSabores={setValorTotalSabores}
            setSaboresSelecionados={setSaboresSelecionados}
            SaboresSelecionados={SaboresSelecionados}

            quantidadeTotal={quantidadeTotal}
            setQuantidadeTotal={setQuantidadeTotal}
        />
      </div>
    </div>
  );
}