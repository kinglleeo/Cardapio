{produto.map((item)=>  
    <div className="carde">
        <div className="carde-inner">
            <div className='box-item-List'>
                <div className='item-List-info'>
                    <div className='box-List-img'>
                        <div className='item-img'>
                            {item.adicionais === "" ? 
                               (<button onClick={()=> handleCart(item)} className="btn-azul-estiloso"> Adicionar </button>) 
                                : (<button onClick={(()=> handleAdicionais(item))} className="btn-azul-estiloso"> Adicionais </button>)}
                        </div>
                    </div>
                    <div className='bloco-item-info'>
                        <div className='box-name'>
                            <div className='item-info-name'>{item.nome}</div>
                        </div>
                            <div className='item-info-valor'>
                                <div>Valor</div>
                                    <div>{formCurrency.format(item.valor)}</div>
                            </div>
                        </div>
                </div>
                <div className='bloco-List-Info-Des'>
                    <div className='List-Info-Des'>
                        <div><label>Descrição:</label></div>
                            <div className='item-info-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{item.descricao}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}


<div className='item-info-valor'>
                                    <div>Valor</div>
                                    <div>{formCurrency.format(item.valor)}</div>
                                </div>