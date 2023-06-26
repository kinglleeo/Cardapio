import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../Styles/StyleCarBar.css';
import { formCurrency } from '../AA-utilidades/numeros';

export default function IconCarrinho() {
  const cart = useSelector((state) => state.cart);
  const [totalCart, setTotalCart] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

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
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const footerHeight = 40;
    const windowHeight = window.innerHeight;
    const contentHeight = document.body.offsetHeight;
    const scrollThreshold = contentHeight - windowHeight - footerHeight;
    const isCartFixed = scrollPosition >= scrollThreshold;
    const cartBottomPosition = isCartFixed ? 150 : 40;

    const cartElement = document.querySelector('.carrinho');
    if (cartElement) {
      cartElement.style.bottom = `${cartBottomPosition}px`;
    }
  }, [scrollPosition, cart]);

  return (
    <div className='carrinho'>
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
