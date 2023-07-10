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



                              


      <div>
            <div className='caixaAtalhoTerminal'>
              <div className='atalhoTerminalNome'>Em Preparo</div>
              <div className='caixaCheckBoxTerminal'>
                <label className='containerCheckTerminal'>
                  <input type='checkbox' checked={filtroPreparo} onChange={() => setFiltroPreparo(!filtroPreparo)} />
                  <div className='checkmark'></div>
                </label>
              </div>
            </div>
            <div className='caixaAtalhoTerminal'>
              <div className='atalhoTerminalNome'>Em Transporte</div>
              <div>
                <label className='containerCheckTerminal'>
                  <input type='checkbox' checked={filtroTransporte} onChange={() => setFiltroTransporte(!filtroTransporte)} />
                  <div className='checkmark'></div>
                </label>
              </div>
            </div>
            <div className='caixaAtalhoTerminal'>
              <div className='atalhoTerminalNome'>Finalizados</div>
              <div>
                <label className='containerCheckTerminal'>
                  <input type='checkbox' checked={filtroFinalizados} onChange={() => setFiltroFinalizados(!filtroFinalizados)} />
                  <div className='checkmark'></div>
                </label>
              </div>
            </div>
            </div>
