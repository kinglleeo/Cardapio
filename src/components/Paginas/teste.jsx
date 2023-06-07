<div className='historicoItem-box'>
              <div className='historico-date'> Dia {formatDate(item.date)} </div>
              <div>
                {item.items.map((item)=>
                   <div className='carde carde-cart' key={item.idCart}>
                   <div className='carde-inner '>
                       <div className='cart-box'>
                           <div className='cart-item2'>
                               <div className='box-item-cart'>
                                   <div className='cart-box-item-1'>
                                       <div className='cart-box-item-name'>
                                           <div>{item.nome}</div>
                                       </div>
                                       <div className='cart-box-item-descricao'>
                                           <div className='cart-item-titulo-descricao'>{item.descricao === "" ? (<div></div>) : (<div> Descrição </div>)}</div>
                                           <div className='cart-item-descricao'>{item.descricao}</div>
                                       </div>
                                   </div >
                               </div>
                           </div>
                       </div>
                       <div className='cart-box-observacoes'>
                           <div className='cartbox-observacoes-text'> Observações </div>
                           <div className='cartbox-observacoes-box'><div>{item.Observacao}</div></div>
                       </div>
                      <div className='AddToCar-Historico' >
                        <button onClick={addCar} className='btn-historico' > Adicionar ao carrinho </button>
                      </div>
                   </div>
               </div>
                )}
              </div>
            </div>