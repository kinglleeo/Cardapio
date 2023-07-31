import '../Carrinho/CarrinhoFunções/PedidoCart/modalpedidos.css'

export default function modal({ setModalError, error }){
   
    return(
    <>
        <div className='darkBG' onClick={() => setModalError(false)} />
            <div className='centered'>
            <div className='modalPedidos'>
            <button className='closeBtn' onClick={() => setModalError(false)}> <div className='iconeBtnCloseModal'></div> </button>
            <div className='modalPedidosContent'> 
                <div className='tituloModalPedidoCart'> 
                    <div className='caixaIconeALerta'><div className='iconeAlerta'></div></div>
                        <div> {error} </div>
                    </div>
                <button className='btnAlertOk'  onClick={() => setModalError(false)}> Fechar </button>
            </div>
            </div>
        </div>
    </>
  );
};