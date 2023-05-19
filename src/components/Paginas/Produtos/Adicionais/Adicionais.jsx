import React, { useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo';
import GruposAdicionais from './GruposAdicionais';

export default function Adicionais() {
   const [idGrupoOpcoes, setIdGrupoOpcoes] = useState('');

  return (
    <div>
      <div>
        <Header />
      </div>
        <AdicionaisInfo
          idGrupoOpcoes={idGrupoOpcoes}
        />
      <div>
        <GruposAdicionais
          setIdGrupoOpcoes={setIdGrupoOpcoes}
        />
      </div>
    </div>
  );
}