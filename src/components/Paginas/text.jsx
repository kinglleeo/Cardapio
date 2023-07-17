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


      useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tipoComanda = urlParams.get('tipoComanda');
        const numeroComanda = urlParams.get('numeroComanda');
        const cnpj = urlParams.get('cnpj');
        const login = urlParams.get('login')
            setCnpj(cnpj)
        const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiRestaurante.php?cnpj=${cnpj}`;
            axios
                .post(url)
                .then((response)=>{
                    setResposta(response);
                })
            const Dados = {
                tipoComanda: tipoComanda,
                numeroComanda: numeroComanda,
                cnpj: cnpj
            }
            
            const timeout = setTimeout(() => {
            if(tipoComanda === "MESA"){
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(Dados));
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                //navigate('/Main')
            } 
            else if(tipoComanda === "CARTAO"){
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(Dados));
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                //navigate('/Main')
            }
            else if (login === "TERMINAL"){{
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(Dados));
                localStorage.setItem('login', login);
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                //navigate('/LoginAdm')
            }}
            else if (login === "GARCOM"){{
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(Dados));
                localStorage.setItem('login', login);
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                //navigate('/LoginGarcom')
            }}
            else if (tipoComanda === "DELIVERY"){{
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(Dados));
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                console.log(infoClientes)
                //navigate('/Main')
            }} 
          }, 3000);
          return () => {
            clearTimeout(timeout);
        };
    }, [infoClientes, setInfoClientes, setResposta]);
    
    useEffect(() => {
        if (resposta) {
          const parts = resposta.data.split('|');
          if (parts.length === 2) {
            const rotalink = parts[0].trim();
            const rotaBase = parts[1].trim();
            const RotaFinal = `${rotalink}:${rotaBase}`;
                iniciarRota(RotaFinal)
          }
        }
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
    }, [cnpj, resposta, setInfoClientes]);
    