useEffect(()=>{
    api
        .get(`/listaProdutos/${ID_SUBGRUPO}`)
         .then((getdata)=>{
             setProduto(getdata.data);
         });
  }, []);
  <ProdutoList
  ID_SUBGRUPO={item.ID_SUBGRUPO}
/>


/${ID_GRUPO}


useEffect(() => {
    api
        .get('/Adicionais')
        .then((getdata) => {
            setAdicionais(getdata.data);
    });
  }, []);


  {produto.map((item)=>
    <div className='card' key={item.ID_PRODUTO}>
        <div className='box-produtos'>
            <div className='produtos-info'>
                <div className='produtos-name'>{item.PRODUTO}</div>
                <div className='produtos-valor'>
                    {formCurrency.format(item.VALOR_MINIMO) === 0 && (
                        <div>
                            <div>Valor</div>
                            <div>{formCurrency.format(item.VALOR_VENDA)}</div>
                        </div>
                    )}
                </div>
            <div className='produtos-img'>
                <div></div>
            </div>
        </div>
    </div>
</div>
)}



<div>
      <TopoPagina valor={valorTotal} />
      {adicionais.map((adicional) => (
        <div className="adicional" key={adicional.id}> 
          <h3>{adicional.nome}</h3>
            <p>{adicional.descricao}</p>
            <p>{formCurrency(adicional.valor)}</p>
          <button onClick={handleIncreaseQuantidade}>+</button>
            <span>{quantidade}</span>
          <button onClick={handleDecreaseQuantidade}>-</button>
        </div>
      ))}
    </div>