import { React } from 'react'
import { formCurrency } from '../../../AA-utilidades/numeros';
import { SelecionarTamanho } from './MetodosAdicionaisTamanhos'

export default function GrupoTamanho({ grupoTamanho, setTamanhoEscolhido }){

 
    return(
        <div className=''>
            {Array.isArray(grupoTamanho)
                ? grupoTamanho.map((item, index) => (
                    <div className='Card-Adicionais' key={item.ID}>
                      <div className='Card-Adicionais-inner'>
                        <div className='Card-Adicionais-Descricao'>
                          <div className='box-descricao-1'>
                            <div className='Adicional-nome'>{item.TAMANHO}</div>
                          </div>
                          <div className='box-descricao-2'>
                            <div className='adicional-valor'>{formCurrency.format(item.VALOR_VENDA)}</div>
                          </div>
                        </div>
                        <div>
                            <SelecionarTamanho
                              item={item}
                              setTamanhoEscolhido={setTamanhoEscolhido}
                            />
                        </div>
                      </div>
                    </div>
                  ))
                : null}  
        </div>
    )

}