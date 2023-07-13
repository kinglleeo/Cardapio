import { React, useState } from 'react'
import '../../Styles/Styles.css'
import { CarrinhoBarPagamento } from './CarrinhoFunções/CarrinhoBarPagamento'
import HeaderSimplificado from '../header/HeaderSimplificado'
import CartItem from './CarrinhoFunções/CartItems'
import Observacoes from './CarrinhoFunções/Observacoes'
import Localizacao from './CarrinhoFunções/Localizacao'
import Footer from '../Footer/Footer'
import FunçõesCarrinho from './Garçom/FunçõesCarrinho'

export default function CarrinhoMain(){
  const [observacoesCart, setObservacaoCart] = useState('');
  const [pedido, setPedido] = useState([]);
  const [tipo, setTipo] = useState(null);
  const [mesaSelecionada, setMesaSelecionada] = useState(null);
  const [opçaoEscolhida, setOpçaoEscolhida] = useState('')
  const [numeroComanda, setNumeroComanda] = useState('')

  
return(
    <div className='pagina'>
      <div className='Main'>
        <div>
          <HeaderSimplificado/>
        </div>
        <div>
          <CartItem
            setPedido={setPedido}
          />
        </div>
        <div>
            <Observacoes
              setObservacaoCart={setObservacaoCart}
            />
        </div>
        <div>
          <FunçõesCarrinho
            setOpçaoEscolhida={setOpçaoEscolhida}
            setNumeroComanda={setNumeroComanda}
          />
        </div>
        <div>
          <Localizacao
            opçaoEscolhida={opçaoEscolhida}
            tipo={tipo}
            setMesaSelecionada={setMesaSelecionada}
          />
        </div>
        <div>
          <CarrinhoBarPagamento
            tipocomanda={tipo}
            setTipo={setTipo}
            Pedido={pedido}
            observacoesCart={observacoesCart}
            mesaSelecionada={mesaSelecionada}
            opçaoEscolhida={opçaoEscolhida}
            numeroComanda={numeroComanda}
          />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

