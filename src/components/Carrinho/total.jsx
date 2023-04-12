import {useSelector} from 'react-redux'

function Total() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalvalor = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalvalor += item.valor * item.quantity
    })
    return {totalvalor, totalQuantity}
  }
 
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) 
          : <strong>${getTotal().totalvalor}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total