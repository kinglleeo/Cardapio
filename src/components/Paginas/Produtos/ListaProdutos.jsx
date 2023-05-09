import { React } from 'react';
import MenuBar from '../../navbar/menubar';
import Footer from '../../Footer/Footer';
import TamanhoPizzas from './Pizzas/tamanho-pizza';
import Porcoes from './Porções/Porcoes';
import Lanches from './Lanches/lanches';
import Pasteis from './Pasteis/pasteis';
import Bebidas from './Bebidas/bebidas';
import './listaProdutos.css'

export default function ListaProdutos(){

    

    return(
        <div className='lista-produtos'>
            <div>
                <MenuBar/>
            </div>
            <div>
                <Lanches/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
       
    )
}