<TotalItem
                  itemquantity={item.quantity}
                  itemid={item.id}
                  itemvalor={item.totalCompra}
                />


                <button className="btn-delete" onClick={()=> dispatch(removeItem(item.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fillRule="red" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                        </svg>
                      </button>




            <div className='cart-box'>
              <div className='car-item1'>
                <TotalItem
                  itemquantity={item.quantity}
                  itemid={item.id}
                  itemvalor={item.totalCompra}
                />
              </div>
              <div className='cart-item2'>
                <div className='box-item-cart'>
                  <div className='cart-box-item-1'>
                    <div className='cart-box-item-name'>
                      <div> Nome </div>
                      <div className='cart-box-item-descricao'>
                          <div className='cart-item-titulo-descricao'> Descricao: </div>
                          <div className='cart-item-descricao'> Descricao </div>
                      </div>
                    </div>
                  </div>
                  <div className='cart-box-item-2'>
                  <button className="btn-delete" onClick={()=> dispatch(removeItem(item.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fillRule="red" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                        </svg>
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='cart-box-observacoes'>
                <div className='cartbox-observacoes-text'> Observações </div>
                <div className='cartbox-observacoes-box'><div>{item.observacoes}</div></div>
            </div>
          </div>
        </div>