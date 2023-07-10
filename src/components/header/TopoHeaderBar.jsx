import { useState, React } from 'react';
import './StyleHeaders.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function cartHeader(){
    const navigate = useNavigate();
    const [pagina, setPagina] = useState('')
    const location = useLocation();

    useEffect(()=>{
        const path = location.pathname;
        const nome = path.substring(path.lastIndexOf('/') + 1);
            setPagina(nome);
    }, [location.pathname])

    const Voltar =()=>{
        navigate(-1)
    }
    
    return(
        <div className='cartHeaderTopo'>
            <div className='cartHeaderTopoEsquerda'>
                <div className='caixa-seta'>
                    <div className='setaEsquerda' onClick={Voltar}></div>
                </div>
                <div className='caixaPaginaNome'> {pagina} </div>
            </div>
            <div className='logo-garline-header'>
                <div className='logo-garline'></div>
            </div>
        </div>
    )
}