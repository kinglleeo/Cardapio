import { React, useState, useEffect } from 'react';
import '../../Styles/StyleCarBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formCurrency } from '../AA-utilidades/numeros';

export default function BarraCarrinhoAtalho() {
  const cart = useSelector((state) => state.cart);
  const [totalCart, setTotalCart] = useState('');
  const [buttonBottom, setButtonBottom] = useState(0);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  useEffect(() => {
    const newTotalCart = sessionStorage.getItem('totalCart');
    setTotalCart(newTotalCart);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const footerRect = footer.getBoundingClientRect();
      const buttonBottomPosition = footerRect.top - window.innerHeight + 110;

      if (window.scrollY >= buttonBottomPosition) {
        setButtonBottom(120);
      } else {
        setButtonBottom(40)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className='carrinho' style={{ position: 'fixed', bottom: `${buttonBottom}px` }}>
      <div className='caixa-carrinho'>
        <div className='quantidade-cart margin1'>
          <div className='totalQuantidade-cart'>{getTotalQuantity() || 0} X</div>
          <div className='totalQuantidade-cart-svg'>
            {getTotalQuantity() > 0 ? (
              <div className='img-cartCheio'></div>
            ) : (
              <div className='img-cartVazio'></div>
            )}
          </div>
        </div>
        <div className='text-cart'>
          <Link to='/carrinho' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div>MEU CARRINHO</div>
          </Link>
        </div>
        <div className='quantidade-cart margin2'>
          <div>{formCurrency.format(totalCart)}</div>
        </div>
      </div>
    </div>
  );
}
