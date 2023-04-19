import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { TotalItem } from './total'


export default function CartItem() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  
  
  return (
    <div>
      <div>
        {cart.map((item)=>
          <div key={item.key}>
            <div>{item.nome}</div>
            <div>{item.descricao}</div>
              <TotalItem
                itemquantity={item.quantity}
                itemid={item.id}
                itemvalor={item.valor}
              />
            <button onClick={()=> dispatch(removeItem(item.id))}> Remover </button>
          </div>
        )}
      </div>      
    </div>
  )
}

