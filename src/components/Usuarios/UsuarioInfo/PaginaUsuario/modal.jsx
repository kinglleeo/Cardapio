import './modal.css'
import { formCurrency } from "../../../AA-utilidades/numeros";
import { addToCart } from '../../../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function modal({ setIsOpen, item }){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(item)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const AddCart=(item)=>{
        dispatch(addToCart(item))
    }
    return(
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
        <div className='centered'>
            <div className='modal'>
                <button className='closeBtn' onClick={() => setIsOpen(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalContent'>
                    {item.tipo === "NAO" ?(
                            <div className="modalItems">
                                <div className='modalProduto'>{item.quantity} - {capitalizeFirstLetter(item.produto.PRODUTO.toLowerCase())}</div>
                                    {item.tamanhoEscolhido !== null ? (<div className='modalTamanho'> ( {capitalizeFirstLetter(item.tamanhoEscolhido.TAMANHO.toLowerCase())} )</div>) : ('')}
                                    {item.produto.FICHA_TECNICA !== null ? (<div className='modalFicha'>{item.produto.FICHA_TECNICA.toLowerCase()}</div>) : ('')}
                                    {item.observacoes !== '' ? (<div className='modalObsevacoes'>{item.observacoes}</div>) : ('')}            
                                    {item.adicionalSelecionado !== null ? (
                                        item.adicionalSelecionado.map((add)=>
                                            <div className='modalAdicionais'>
                                                <div> {add.quantidade} - {add.DESCRICAO} </div>
                                            </div>
                                        )
                                        ) : ('')}
                            </div>
                        ) : item.tipo === "SIM" ? (
                            <div className="modalItems">
                                <div className='modalProduto'>{item.quantity} - Pizza {item.produto.TAMANHO}</div>
                                <div>
                                    {item.SaboresSelecionados.map((sabor)=>
                                        <div className='modalSabores'>
                                            <div className='modalSaboresProduto'> {sabor.quantidade} - {capitalizeFirstLetter(sabor.PRODUTO.toLowerCase())} </div>
                                            {sabor.FICHA_TECNICA !== null ? (<div className='modalSaboresFicha'> {sabor.FICHA_TECNICA.toLowerCase()} </div>) : ('')}
                                        </div>
                                    )}
                                </div>
                                    {item.observacoes !== '' ? (<div className='modalObsevacoes'>{item.observacoes}</div>) : ('')} 
                                    {item.adicionalSelecionado !== null ? (
                                            item.adicionalSelecionado.map((add)=>
                                                <div className='modalAdicionais'>
                                                    <div> {add.quantidade} - {add.DESCRICAO} </div>
                                                </div>
                                            )
                                            ) : ('')}
                            </div>
                        ): null 
                    }
                </div>
                <div className='modalValor'>{formCurrency.format(item.totalCompra)}</div>
                    <button className='AddCartModal'> adicionar  </button>
            </div>
        </div>
    </>
  );
};