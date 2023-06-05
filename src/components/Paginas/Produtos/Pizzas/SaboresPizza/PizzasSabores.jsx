import React, { useState } from 'react';
import Header from '../../../../header/Header';
import GruposDeSabores from './GrupoDeSabores';

export default function Adicionais({ setValorTotalSabores, setSelecionados, selecionados  }) {
  
  
  return (
    <div>
      <div>
        <GruposDeSabores
            setValorTotalSabores={setValorTotalSabores}
            setSelecionados={setSelecionados}
            selecionados={selecionados}
        />
      </div>
    </div>
  );
}