import React, { useState } from 'react';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo';
import GruposAdicionais from './GruposAdicionais';

export default function Adicionais() {
  const [totalValue, setTotalValue] = useState(0);
  const [descricao, setDescricao] = useState([]);
  const [idGrupo, setIdGrupo] = useState('');
  const [observacao, setObservacao] = useState([]);

  return (
    <div>
      <div>
        <Header />
      </div>
        <AdicionaisInfo
          totalValue={totalValue}
          descricao={descricao}
          idGrupo={idGrupo}
          observacao={observacao}
        />
      <div>
        <GruposAdicionais
          setTotalValue={setTotalValue}
          setDescricao={setDescricao}
          setIdGrupo={setIdGrupo}
          setObservacao={setObservacao}
        />
      </div>
    </div>
  );
}