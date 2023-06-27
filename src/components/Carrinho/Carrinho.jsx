import CartItem from './CartItems'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import '../../Styles/Styles.css'

export default function Cart(){

return(
    <div className='pagina'>
      <div className='Main'>
        <div>
          <Header/>
        </div>
        <div>
          <CartItem/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

