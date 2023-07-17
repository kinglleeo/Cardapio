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


      
<div className='lista-produtos'>
  {Array.isArray(produto) ? (
    produto.map((data) => {
      // Check if tipoComanda is DELIVERY and data.DELIVERY is SIM
      if (tipoComanda === "DELIVERY" && data.DELIVERY !== "SIM") {
        return null; // Skip this product
      }

      return (
        <div className='card-produtos' key={data.ID_PRODUTO}>
          <div className='box-produtos' onClick={() => Adicionais(data, subGrupo, grupo)} style={{ height: data.FICHA_TECNICA ? '90px' : '70px' }}>
            <div className='produtos-info'>
              <div className='produto-nome'>
                <div className='item-nome'>{capitalizeFirstLetter(data.PRODUTO.toLowerCase())}</div>
                {data.FICHA_TECNICA !== null ? (<div className='produto-ingredientes'> {data.FICHA_TECNICA.toLowerCase()} </div>) : (null)}
              </div>
              <div className='produto-valor'>
                <div className='box-valor'>
                  {data.VALOR_MINIMO > 0 ? (
                    <div>
                      <div>{formCurrency.format(data.VALOR_MINIMO)}</div>
                    </div>
                  ) : (
                    <div>
                      <div>{formCurrency.format(data.VALOR_VENDA)}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='produtos-img'>
              <img src={'data:image/png;base64,' + data.IMAGEM_WEB} key={data.ID_PRODUTO} alt='Restaurante' className='img-produto'/>
            </div>
          </div>
        </div>
      );
    })
  ) : null}
</div>
