import { React, useState, useEffect } from 'react';
import '../../Styles/StyleCarrinhoBarPagamento.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formCurrency } from '../AA-utilidades/numeros';

export default function BarraCarrinhoAtalho() {
  const cart = useSelector((state) => state.cart);
  const [totalCart, setTotalCart] = useState('');
  const [buttonBottom, setButtonBottom] = useState(0);

  const getTotalQuantity = () => {
    let total = 0;
    if (cart && Array.isArray(cart)) {
      cart.forEach((item) => {
        total += item.quantity;
      });
    }
    return total;
  };

  useEffect(() => {
    const newTotalCart = sessionStorage.getItem('totalCart');
    setTotalCart(newTotalCart);
  }, []);



  return (
    <Link to='/carrinho' style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <div className='carrinho'>
        <div className='totalQuantidade-cart'>{getTotalQuantity() || 0} X</div>
        <div className='totalQuantidade-cart-svg'>
          {getTotalQuantity() > 0 ? (
            <div className='img-cartCheio'></div>
            ) : (
            <div className='img-cartVazio'></div>
            )}
        </div>
      </div>
    </Link>
  );
}
