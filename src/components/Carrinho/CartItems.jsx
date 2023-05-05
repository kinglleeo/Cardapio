import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { TotalItem } from './total'
import './Styles-cart/styles.css'
import { formCurrency } from '../AA-utilidades/numeros'

export default function CartItem() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  
  return (
    <div>
      {cart.map((item) =>
    <div className='carde carde-cart'>
                <div className='carde-inner'>
                    <div className='caixa-cart-items'>
                        <div className='cart-item1'>
                            <div className='cart-item1-column-1'>
                                <TotalItem
                                    itemquantity={item.quantity}
                                    itemid={item.id}
                                    itemvalor={item.valor}
                                />
                            </div>
                        </div>
                        <div className='cart-item2'>
                            <div className='cart-itemname-card'>
                                <div className='cart-itemname-card-1'>
                                    <div className='cart-item-2-name'>{item.nome}</div>
                                    <div className='cart-item-2-dsc'>
                                        <div className='titulo-descricao'>Descrição:</div>
                                        <div className='descricao-descricao'>{item.descricao}</div>
                                    </div>
                                </div >
                                <div className='cart-itemname-card-2'><button class="noselect" onClick={()=> dispatch(removeItem(item.id))}></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      )}
      </div>
  )
}

