import { React, useState, useEffect } from 'react'
import './Adicionais.css'
import Decimal from 'decimal.js';
import BtnCarrinho from './BtnCarrinho';



export default function AdicionaisInfo({ tipo, Produto, adicionalSelecionado, tamanhoEscolhido, observacoes, ID_GRUPO_OPCOES }){
    const [totalCompra, setTotalCompra] = useState('');

    return(
        <div className='adicionaisInfo'>
                <div>
                    {Produto.PRODUTO}
                </div>
                <div>
                    <BtnCarrinho
                        Produto={Produto}
                        adicionalSelecionado={adicionalSelecionado}
                        totalCompra={totalCompra}
                        tamanhoEscolhido={tamanhoEscolhido}
                        observacoes={observacoes}
                        ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                        tipo={tipo}
                    />
                </div>
        </div>
    )
}