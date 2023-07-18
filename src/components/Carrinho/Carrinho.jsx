import { React, useState } from 'react'
import '../../Styles/Styles.css'
import { CarrinhoBarPagamento } from './CarrinhoFunções/CarrinhoBarPagamento'
import HeaderSimplificado from '../header/HeaderSimplificado'
import CartItem from './CarrinhoFunções/CartItems'
import Observacoes from './CarrinhoFunções/Observacoes'
import Localizacao from './CarrinhoFunções/Localizacao'
import Footer from '../Footer/Footer'
import FunçõesCarrinho from './Garçom/FunçõesCarrinho'
import BarraCarrinhoAtalho from './BarraCarrinhoAtalho'

export default function CarrinhoMain(){
  const [observacoesCart, setObservacaoCart] = useState('');
  const [pedido, setPedido] = useState([]);
  const [tipoComanda, setTipoComanda] = useState(null);
  const [mesaSelecionada, setMesaSelecionada] = useState(null);
  const [opçaoEscolhidaGarcom, setOpçaoEscolhidaGarcom] = useState('')
  const [numeroComandaGarcom, setNumeroComandaGarcom] = useState('')

   
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
            setOpçaoEscolhidaGarcom={setOpçaoEscolhidaGarcom}
            setNumeroComandaGarcom={setNumeroComandaGarcom}
          />
        </div>
        <div>
          <Localizacao
            opçaoEscolhidaGarcom={opçaoEscolhidaGarcom}
            tipoComanda={tipoComanda}
            setMesaSelecionada={setMesaSelecionada}
          />
        </div>
        <div>
          <CarrinhoBarPagamento
            tipoComanda={tipoComanda}
            setTipoComanda={setTipoComanda}
            Pedido={pedido}
            observacoesCart={observacoesCart}
            mesaSelecionada={mesaSelecionada}
            opçaoEscolhidaGarcom={opçaoEscolhidaGarcom}
            numeroComandaGarcom={numeroComandaGarcom}
          />
        </div>
        <div>
          <BarraCarrinhoAtalho/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

