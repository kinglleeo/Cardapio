<meta name="appleid-signin-use-popup" content="true" />

<meta name="appleid-signin-client-id" content="com.babychakra.alpha1.client"/>
    <meta name="appleid-signin-scope" content="name email" />
    <meta name="appleid-signin-redirect-uri" content="https://www.myglamm.com/"/>
    <meta name="appleid-signin-state" content="origin:web" />




    <div
                id="appleid-signin"
                className="signin-button"
                data-color="black"
                data-border="true"
            > </div>


            
    useEffect(() => {
        window.AppleID.auth.init({
          clientId,
          scope,
          redirectURI,
          state,
          usePopup: false
        });
    
        document.addEventListener("AppleIDSignInOnSuccess", (event) => {
          console.log("Success ", event);
        });
    
        document.addEventListener("AppleIDSignInOnFailure", (event) => {
          console.log("Error ", event);
        });
      }, []);




      <div className='listaPedido-card' key={itemPedido.ID} onClick={()=> selecionarPedido(itemPedido)}>
                            <div className='pedidoCard-linha'>
                                <div className='linhaEsquerda'> {itemPedido.TIPOCOMANDA} </div>
                                <div className='linhaDireita'> {itemPedido.HORA.split(':').slice(0, 2).join(':')} </div>
                            </div>
                            <div className='pedidoCard-linha'>
                                <div className='linhaEsquerda'> Total: {formCurrency.format(itemPedido.VNF_W16)} </div>
                                <div
                                    className={
                                        'statusPedidos ' + 
                                    (itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO INICIADO' ? 'iniciado' :
                                    itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CANCELADO' ? 'cancelado' :
                                    itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CONFIRMADO' ? 'confirmado' :
                                    itemPedido.ULTIMO_STATUS_PEDIDO === 'PENDENTE' ? 'pendente' : '')
                                    }
                                    > {capitalizeFirstLetter(itemPedido.ULTIMO_STATUS_PEDIDO.toLowerCase())} </div>

                            </div>
                        </div>