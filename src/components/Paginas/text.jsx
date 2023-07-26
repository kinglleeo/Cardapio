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
          alet("Success ", event);
        });
    
        document.addEventListener("AppleIDSignInOnFailure", (event) => {
          aletconsole.log("Error ", event);
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




  useEffect(() => {
    // Function to fetch updated pedidos and handle notifications
    const fetchUpdatedPedidos = () => {
      api
        .get(`/listaPedidosCliente/${user.uid}`)
        .then((getdata) => {
          const updatedPedidos = getdata.data;
          setListaPedidos(updatedPedidos);

          // Check if the STATUS of any pedido has changed
          updatedPedidos.forEach((updatedPedido) => {
            const originalPedido = listaPedidos.find(
              (pedido) => pedido.ID === updatedPedido.ID
            );

            // Show notification if the STATUS has changed
            if (originalPedido && originalPedido.STATUS !== updatedPedido.STATUS) {
              const statusText =
                updatedPedido.STATUS === 1
                  ? 'Novo'
                  : updatedPedido.STATUS === 2
                  ? 'Aceito'
                  : updatedPedido.STATUS === 3
                  ? 'Em Preparo'
                  : updatedPedido.STATUS === 4
                  ? 'Em Transporte'
                  : updatedPedido.STATUS === 5
                  ? 'Finalizado'
                  : updatedPedido.STATUS === 6
                  ? 'Cancelado'
                  : '';

              toast.info(`Pedido ${updatedPedido.NUMEROCOMANDA} está agora ${statusText}`);
            }
          });
        })
        .catch((error) => {
          setError('Erro no listaPedidosCliente');
          setModalError(true);
        });
    };

    // Fetch updated pedidos every 15 seconds
    const intervalId = setInterval(fetchUpdatedPedidos, 15000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [user.uid, listaPedidos]);

  // ... (rest of the code)
}


// At the root level of your application (e.g., in App.js or index.js)
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      {/* ... Your other components ... */}
      <ToastContainer />
    </div>
  );
}



const irParaMenu = (dadosEmpresa, dados) => {
  const timeout = setTimeout(() => {
    localStorage.clear();
    auth.onAuthStateChanged((user) => {
      localStorage.setItem('uidToken', user.uid);
    });
    localStorage.setItem('empresa', JSON.stringify(dadosEmpresa));
    localStorage.setItem('dados', JSON.stringify(dados));

    OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init({
        appId: "YOUR_ONESIGNAL_APP_ID_HERE"
      })
    });

    // Wait for OneSignal to initialize before showing the prompt
    OneSignal.on('init', function() {
      OneSignal.showNativePrompt();
    });

    // Listen for subscription changes
    OneSignal.on('subscriptionChange', function (isSubscribed) {
      if (isSubscribed) {
        OneSignal.getUserId()
          .then(function(playerId) {
            localStorage.setItem('playerId', playerId);
          });
      }
    });

    navigate('/Main');
  }, 3000);
};
