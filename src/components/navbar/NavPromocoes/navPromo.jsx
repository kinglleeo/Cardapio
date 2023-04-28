import { React, useState, useEffect } from 'react'
import './navPromo.css'
import axios from 'axios'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom'
import '../../Estilos/Style.css'

export default function Teste(){
    const [promo, setPromo ] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setPromo(getdata.data);
            });
    }, []);
    
    const handleAdicionais = (item) => {
        navigate('/Adicionais', { state: { item } });
      };

    return(
        
            <div className='bloco-promocoes'>
                <div className='bloco-1365'>
                    <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                      }}
                      pagination={{
                        dynamicBullets: true,
                      }}
                      navigation={true}
                        modules={[Pagination, Autoplay, Navigation]}
                    >
                        {promo.map((item)=>
                            <SwiperSlide>
                                <div className='card' key={item.id}>
                                    <span></span>
                                    <div className='tabela-card-promo'>
                                        <div className='img'>
                                            <div className='item-f-img'>
                                                <button onClick={(()=> handleAdicionais(item))} class="btn-azul-estiloso"> Adicionais </button>
                                            </div>
                                    </div>
                                        <div className='descricoes'>
                                            <div className='descricoes-items'>
                                                <div className='bloco-1'>
                                                    <div>{item.nome}</div>
                                                </div>
                                                <div className='bloco-2'>
                                                    <div>{item.descricao}</div>
                                                </div>
                                                <div className='bloco-3'>
                                                    <div className='items-valor'>
                                                        <div className='valores'>
                                                            <div>Valor</div>
                                                            <div>R$ {item.valor}</div>
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
