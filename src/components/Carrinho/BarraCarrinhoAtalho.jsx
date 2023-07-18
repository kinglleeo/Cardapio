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
      <div className='atalhoCarrinho'>
        <div className='mainPage'>
          <Link to='/Main' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className='centralizarIcone'><div className='iconeMainPageApagado'></div></div>
            <div style={{ color: 'grey'}}> Home </div>
          </Link>
        </div>
        <div className='usuarioPage'>
          <Link to='/PaginaUsuario' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className='centralizarIcone'><div className='iconePerfilApagado'></div></div>
            <div style={{ color: 'grey'}}> Perfil </div>
          </Link>
        </div>
        <div className='cartPage'>
          <Link to='/Carrinho' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <div className='totalQuantidade-cart-svg'><div className='iconeCartApagado'></div></div>
              <div style={{ color: 'grey'}}> Carrinho </div>
          </Link>
        </div>
      </div>
  );
}
