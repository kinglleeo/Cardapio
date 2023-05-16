import { React } from 'react'
import { formCurrency } from '../../../AA-utilidades/numeros';

import './AdicionaisList.css';

export default function ListaProdutosAdicionais({ listaAdicionais, setListaAdicionais, quantidademaxima, setTotalItem, totalItem }){
    
    const quantidadeEscolhidos=()=>{
        const escolhidos = listaAdicionais.quantidade
        
        return escolhidos
    }
    const quantidadeFaltante=()=>{
      const faltantes = quantidademaxima 
          faltantes =- listaAdicionais.quantidade
        return faltantes
    }

    const increaseQuantity = (index) => {
      setListaAdicionais((prevState) => {
        const updatedAdicionais = [...prevState];
        updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade+1;
        return updatedAdicionais;
      });
    };
  
    const decreaseQuantity = (index) => {
      setListaAdicionais((prevState) => {
        const updatedAdicionais = [...prevState];
        if (updatedAdicionais[index].quantidade) {
          updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade-1;
        }
        return updatedAdicionais;
      });
    };

    useEffect(() => {
      let total = new Decimal(0);
      adicionais.forEach((item) => {
        const valor = new Decimal(item.valor);
        const quantidade = new Decimal(item.quantidade);
        total = total.plus(valor.times(quantidade));
      });
      setTotalItem(total);
    }, [adicionais]);


    return(
        <div>
            <div className='AdicionaisList'>
              <div className='box-quantidadeMaxima'>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Quantidade Maxima</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>{quantidademaxima}</div>
                  </div>
                </div>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Escolhidos</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>{(quantidadeEscolhidos())}</div>
                  </div>
                </div>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Faltam</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>{(quantidadeFaltante())}</div>
                  </div>
                </div>
              </div>
              {Array.isArray(listaAdicionais)
                ? listaAdicionais.map((item, index) => (
                    <div className='Card-Adicionais' key={item.id}>
                      <div className='Card-Adicionais-inner'>
                        <div className='Card-Adicionais-Descricao'>
                          <div className='box-descricao-1'>
                            <div className='Adicional-nome'>{item.nome}</div>
                          </div>
                          <div className='box-descricao-2'>
                            <div className='adicional-valor'>{formCurrency.format(item.valor)}</div>
                          </div>
                        </div>
                        <div className='Card-Adicionais-Botoes'>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow left' onClick={() => decreaseQuantity(index)}></button>
                          </div>
                          <div className='quantia-adicionais'>{item.quantidade}</div>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow right'onClick={() => increaseQuantity(index)}></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}   
            </div>
        </div>
    )
}
