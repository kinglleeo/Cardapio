<div className='Card-Adicionais-Botoes'>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow left' onClick={() => diminuirQuantidade(index)}></button>
                          </div>
                          <div className='quantia-adicionais'>{item.quantidade}</div>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow right'onClick={() => aumentarQuantidade(index)}
                                disabled={Faltam() === 0}
                            ></button>
                          </div>
                        </div>