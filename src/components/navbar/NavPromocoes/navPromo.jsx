import { React, useState, useEffect } from 'react'
import './navPromo.css'
import axios from 'axios';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Promo(){
    const [promo, setPromo] = useState([]);
    
    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setPromo(getdata.data);
            })
            .catch((error)=>{
                console.log(error);
            });
    }, []);

    return(
        <div className='promo-nav-body'>
            <div className='promo-nav-caixa'>
                <div className='promo-nav-titulo'>
                    <div>PROMOÇÕES</div>
                </div>
                <div className='promo-nav-carousel'>
                    <Swiper
                        spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                    >
                        
                            <SwiperSlide>
                                <div className='items-slide'>
                                    <div className='items-nome-box'>
                                        <div className='item-name'>Nome</div>
                                    </div>
                                    <div className='items-descricao-box'>
                                        <div>Descricao</div>
                                    </div>
                                    <div className='items-valor-box'>
                                        <div>
                                            <div>Valor</div>
                                            <div>R$ 0000</div>
                                        </div>
                                        <div>
                                            <div>Valor Desconto</div>
                                            <div>R$ 00000</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}