import { useDispatch, useSelector } from 'react-redux'
import { TotalItem } from './total';
import { removeItem} from '../../redux/cartSlice';
import './Styles-cart/styleCartItem.css'
import '../Estilos/StyleForCard.css'
import { TbTrashXFilled } from 'react-icons/tb'

export default function CartItem() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  
  return (
    <div> 
        <div className='todos-items-lista'>
      {cart.map((item) =>
    <div className='carde carde-cart'>
                <div className='carde-inner '>
                    <div className='cart-box'>
                        <div className='cart-item1'>
                            <TotalItem
                                itemquantity={item.quantity}
                                itemid={item.id}
                                itemvalor={item.valor}
                            />
                        </div>
                        <div className='cart-item2'>
                            <div className='box-item-cart'>
                                <div className='cart-box-item-1'>
                                    <div className='cart-box-item-name'>
                                        <div>{item.nome}</div>
                                    </div>
                                    <div className='cart-box-item-descricao'>
                                        <div className='cart-item-titulo-descricao'>Descrição:</div>
                                        <div className='cart-item-descricao'>{item.descricao}</div>
                                    </div>
                                </div >
                                <div className='cart-box-item-2'>
                                    <button className="btn-delete" onClick={()=> dispatch(removeItem(item.id))}>
                                        <TbTrashXFilled className='icon-trash'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      )}
      </div>
      </div>
  )
}

