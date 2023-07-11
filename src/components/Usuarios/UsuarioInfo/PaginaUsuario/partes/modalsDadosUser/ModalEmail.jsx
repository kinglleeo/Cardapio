import { React, useState} from 'react'
import './modalUser.css'

export default function modal({ email, setIsOpenEmail}){
    const [inputEmail, setInputEmail] = useState('');
    const [novoEmail, setNovoEmail] = useState('');

    const Salvar = () => {
        if (inputEmail === email) {
          console.log('Email igual ao já cadastrado');
          return;
        }
        setNovoEmail(inputEmail);
        setIsOpenEmail(false)
      };
    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenEmail(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenEmail(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div class="coolinput">
                            <label for="input" className="text"> Email </label>
                            <input
                                type='number'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}
                            />
                        </div>
                </div>
                <div>
                    <button className='btnSalvar' onClick={()=> Salvar()}> Salvar </button>
                </div>
            </div>
        </div>
    </>
  );
};