

<div className='card-btn-continuar'>
        <button className='btn-continuar' onClick={handleCotinuar}>
          Continuar Comprando
        </button>
      </div>
      <div className='card-total-pagar'>
        <TotalCart 
          setTotalCart={setTotalCart}
          totalCart={totalCart}
        />
      </div>
      <div className='card-btn-pagar'>
        <button className='btn-pagar' onClick={()=> handlePagar(totalCart, items_pedido, Pedido)}> Finalizar </button>
      </div>