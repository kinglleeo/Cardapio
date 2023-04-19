import {useSelector} from 'react-redux'
import Decimal from 'decimal.js';

export default function Total() {

  const cart = useSelector((state) => state.cart)
  console.log(cart)
  
  const getTotal = () => {
    let totalQuantity = cart.reduce((quant, item) =>{
      return quant.plus(item.quantity || 0)
    }, new Decimal(0));
    let totalvalor = cart.reduce((total, item) =>{
      return total.plus(item.valor || 0)
    }, new Decimal(0));
    const total = new Decimal(totalQuantity)*(totalvalor)
    return  total.toFixed(2);
  }
 
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
           {getTotal()}
        </p>
      </div>
    </div>
  )
}
const getTotal = () => {
    let totalQuantity = 0
    let totalvalor = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalvalor += item.valor * item.quantity
    })
    return {totalvalor, totalQuantity}
  }