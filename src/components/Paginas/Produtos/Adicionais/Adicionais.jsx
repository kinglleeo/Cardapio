import React, { useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo';
import GruposAdicionais from './GruposAdicionais';

export default function Adicionais() {
   const [grupoOpcoes, setIdGrupoOpcoes] = useState('');

  return (
    <div>
      <div>
        <Header />
      </div>
        <AdicionaisInfo
          grupoOpcoes={grupoOpcoes}
        />
      <div>
        <GruposAdicionais
          setIdGrupoOpcoes={setIdGrupoOpcoes}
        />
      </div>
    </div>
  );
}