import React from 'react'
import './teste.css'

export default function teste(){

    const handlechange =()=>{

    }
    return(
        <div className='teste-main'>
            <div className='caxinha-do-teste'>
                <div className='comanda'>
                    <div className='caixa-c'>
                        <div className='item-c'>
                            <div className='item-c-1'>
                                <div>Pizza Grande</div>
                            </div>
                            <div className='item-c-2'>
                                <div>
                                    <div>Total</div>
                                    <div>R$ 000,00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='caixa-d'>
                        <div className='caixa-d-items'>
                            <div>Nome</div>
                            <div>nome1, nome2, nome3, nome4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}