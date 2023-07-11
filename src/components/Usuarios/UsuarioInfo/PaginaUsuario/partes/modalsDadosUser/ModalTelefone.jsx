import { React, useState} from 'react'
import './modalUser.css'

export default function modal({ telefone, setIsOpenTelefone}){
    const [inputTelefone, setInputTelefone] = useState('');
    const [novoTelefone, setNovoTelefone] = useState('');

  

    const Salvar = () => {
        if (inputTelefone.length !== 11) {
          console.log('Valor digitado inválido');
          return;
        }
        if (inputTelefone === telefone) {
          console.log('Telefone igual ao já cadastrado');
          return;
        }
        setNovoTelefone(inputTelefone);
        setIsOpenTelefone(false)
      };

      
    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenTelefone(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenTelefone(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div class="coolinput">
                            <label for="input" className="text"> Celular (xx) xxxxx-xxxx </label>
                            <input
                                type='number'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={inputTelefone}
                                onChange={(e) => setInputTelefone(e.target.value)}
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