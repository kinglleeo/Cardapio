import CartItem from './CartItems'
import { React, useState, useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import '../../Styles/Styles.css'
import HeaderSimplificado from '../header/HeaderSimplificado'
import Observacoes from './Observacoes'
import { CartPagBar } from './CartPagBar'
import Localizacao from './Localizacao'

export default function Cart(){
  const [observacoesCart, setObservacaoCart] = useState('');
  const [pedido, setPedido] = useState([]);
  const [tipo, setTipo] = useState('');
  const [mesaSelecionada, setMesaSelecionada] = useState('');
  
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
          <Localizacao
            tipo={tipo}
            setMesaSelecionada={setMesaSelecionada}
          />
        </div>
        <div>
          <CartPagBar
            tipo={tipo}
            setTipo={setTipo}
            Pedido={pedido}
            observacoesCart={observacoesCart}
            mesaSelecionada={mesaSelecionada}
          />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

