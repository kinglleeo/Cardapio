<div className='tabela-main'>
                    <div className='bloco-listas' id='lista1'>
                            <label>LISTA 1</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{}</div>
                                <div className='item-valor'>{}</div>
                                <div className='item-descricao'>{}</div>
                                <div className='item-botao'><button className='botao-adicionar'> adicionar </button></div>
                            </div>
                            <div className='img'>

                            </div>
                        </div>
                    </div>
                    <div className='bloco-listas' id='lista2'>
                        <label>LISTA 2</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                    <div className='bloco-listas' id='lista3'>
                        <label>LISTA 3</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                </div>


const rowRenderer = ({ index, key, style}) => {
    const item = dataLANCHES[index];
    return (
      <div key={key} style={style} className='bloco-items'>
        <div className='bloco-interno'>
          <div className='item-name'>{item.NOMELANCHES}</div>
          <div className='item-valor'>{item.VALORLANCHES}</div>
          <div className='item-descricao'>{item.DESCRICAOLANCHES}</div>
          <div className='item-botao'><button className='botao-adicionar'> adicionar </button></div>
        </div>
        <div className='img'></div>
      </div>
    );
  };

  