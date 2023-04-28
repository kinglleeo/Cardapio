import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { TotalItem } from './total'
import './Styles-cart/styles.css'

export default function CartItem() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  
  
  return (
    <div>
      {cart.map((item) =>
    <div className='carde'>
                <div className='carde-inner'>
                    <div className='caixa-cart-items'>
                        <div className='cart-item1'>   
                            <button class="noselect" onClick={()=> dispatch(removeItem(item.id))}>
                                <span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                </svg>
                                </span>
                            </button>
                        </div>
                        <div className='cart-item2'>
                                <div className='cart-item-2'>
                                    <div className='cart-item-2-name'>{item.nome}</div>
                                    <div className='cart-item-2-dsc'>{item.descricao}</div>
                                </div>
                        </div>
                        <div className='cart-item3'>
                                <TotalItem
                                    itemquantity={item.quantity}
                                    itemid={item.id}
                                    itemvalor={item.valor}
                                />
                        </div>
                    </div>
                </div>
            </div>
      )}
      </div>
  )
}

