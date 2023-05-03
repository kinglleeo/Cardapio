<div>
        <figure class="snip1566">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample20.jpg" alt="sq-sample20" />
                    <figcaption><i class="ion-android-restaurant"></i></figcaption>
                    <a href="#"></a>
                </figure> 
    </div>,

<div className='caixa-1111'>
<div className='bloco-items-tamanho'>
    <div className='item-tamanho-1'>
        <div>{data.tamanho}</div>
    </div>
    <div className='item-tamanho-2'>
        <div>Valor</div>
        <div> R$ {data.valor}</div>
    </div>
    <div className='item-tamanho-3'>
        <Tamanho
            data={data}
            selectedTamanho={selectedTamanho}
            setSelectedTamanho={setSelectedTamanho}
        />
    </div>
</div>
</div>