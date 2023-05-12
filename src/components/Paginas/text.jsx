

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



