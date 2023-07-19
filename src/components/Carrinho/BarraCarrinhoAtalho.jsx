import { React, useState, useEffect } from 'react';
import '../../Styles/StyleCarrinhoBarPagamento.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function BarraCarrinhoAtalho() {
  const [mainAtivo, setMainAtivo] = useState(false);
  const [usuarioAtivo, setUsuarioAtivo] = useState(false);
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(false);
  const location = useLocation();
    
  useEffect(()=>{
        const path = location.pathname;
        const nome = path.substring(path.lastIndexOf('/') + 1);
          if(nome === "Main"){
            setMainAtivo(true)
          }
          if(nome === "PaginaUsuario"){
            setUsuarioAtivo(true)
          }
          if(nome === "Carrinho"){
            setCarrinhoAtivo(true)
          }
    }, [location.pathname])

  return (
      <div className='atalhoCarrinho'>
        <div className='mainPage'>
          <Link to='/Main' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className='centralizarIcone'><div className={mainAtivo === false ? ('iconeMainPageApagado') : ('iconeMainPageAcesso')}></div></div>
            <div style={mainAtivo === false ? ({ color: 'grey'}) : ({ color: 'black'})}> Home </div>
          </Link>
        </div>
        <div className='usuarioPage'>
          <Link to='/PaginaUsuario' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className='centralizarIcone'><div className={usuarioAtivo === false ? ('iconePerfilApagado') : ('iconePerfil')}></div></div>
            <div style={usuarioAtivo === false ? ({ color: 'grey'}) : ({ color: 'black'})}> Perfil </div>
          </Link>
        </div>
        <div className='cartPage'>
          <Link to='/Carrinho' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <div className='totalQuantidade-cart-svg'><div className={carrinhoAtivo === false ? ('iconeCartApagado') : ('iconeCartAcesso')}></div></div>
              <div style={carrinhoAtivo === false ? ({ color: 'grey'}) : ({ color: 'black'})}> Carrinho </div>
          </Link>
        </div>
      </div>
  );
}
