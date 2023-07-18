<Link to='/carrinho' style={{ color: 'inherit', textDecoration: 'inherit' }}></Link>
</Link>
<div className='totalQuantidade-cart'>{getTotalQuantity() || 0} X</div>
        <div className='totalQuantidade-cart-svg'>
          {getTotalQuantity() > 0 ? (
            <div className='img-cartCheio'></div>
            ) : (
            <div className='img-cartVazio'></div>
            )}
        </div>