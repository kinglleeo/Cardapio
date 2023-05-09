import { React, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../conecções/api';
import "swiper/css";
import "swiper/css/pagination";
import './navPromo.css'

export default function Teste(){
    const [promo, setPromo ] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        api
            .get('/lanches')
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
                    slidesPerView={"auto"}
                    spaceBetween={30}
                        autoplay={{
                           delay: 4500,
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
                                            <div className='btn-adicionais-promo'>
                                                <button onClick={(()=> handleAdicionais(item))} className="btn-azul-estiloso btn-promo"> Adicionais </button>
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
