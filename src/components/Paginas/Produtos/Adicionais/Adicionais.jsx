import React, { useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo';
import GruposAdicionais from './GruposAdicionais';

export default function Adicionais() {
  const [totalValue, setTotalValue] = useState(0);
  const [descricao, setDescricao] = useState([]);
  const [idGrupo, setIdGrupo] = useState('');

  return (
    <div>
      <div>
        <Header />
      </div>
        <AdicionaisInfo
          totalValue={totalValue}
          descricao={descricao}
          idGrupo={idGrupo}
        />
      <div>
        <GruposAdicionais
          setTotalValue={setTotalValue}
          setDescricao={setDescricao}
          setIdGrupo={setIdGrupo}
        />
      </div>
    </div>
  );
}