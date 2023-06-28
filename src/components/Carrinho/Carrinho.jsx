import CartItem from './CartItems'
import { React, useState, useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import '../../Styles/Styles.css'
import CartHeader from './CartHeader'
import Observacoes from './Observacoes'
import { CartPagBar } from './CartPagBar'
import Localizacao from './Localizacao'

export default function Cart(){
  const [observacoesCart, setObservacaoCart] = useState('');
  const [pedido, setPedido] = useState([]);

return(
    <div className='pagina'>
      <div className='Main'>
        <div>
          <CartHeader/>
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
          <CartPagBar
            Pedido={pedido}
            observacoesCart={observacoesCart}
          />
        </div>
        <div>
          <Localizacao/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

