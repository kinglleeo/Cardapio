import { React, useState, useEffect } from 'react'
import './navPromo.css'
import axios from 'axios'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";

export default function Teste(){
    const [promo, setPromo ] = useState([])

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setPromo(getdata.data);
            });
    }, []);

    return(
        
            <div className='bloco-promocoes'>
                <div className='bloco-1365'>
                    <Swiper
                        modules={[Pagination]}
                    >
                        {promo.map((data)=>
                            <SwiperSlide>
                                <div className='card'>
                                    <span></span>
                                    <div className='tabela-card-promo'>
                                        <div className='img'>
                                            <div></div>
                                        </div>
                                        <div className='descricoes'>
                                            <div className='descricoes-items'>
                                                <div className='bloco-1'>
                                                    <div>X-Salada</div>
                                                </div>
                                                <div className='bloco-2'>
                                                    <div>pão de brioche, salada, queijo, presunto, milho, molho</div>
                                                </div>
                                                <div className='bloco-3'>
                                                    <div className='items-valor'>
                                                        <div className='valores'>
                                                            <div>Valor</div>
                                                            <div>R$ 000,00</div>
                                                        </div>
                                                        <div className='valores'>
                                                            <div>Promoção</div>
                                                            <div>R$ 000,00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        
    )
}
