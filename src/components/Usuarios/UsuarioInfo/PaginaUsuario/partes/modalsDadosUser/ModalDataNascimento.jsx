import { React, useState} from 'react'
import './modalUser.css'

export default function modal({ dataNascimento, setIsOpenDataNascimento}){
    const [inputNascimento, setInputNascimento] = useState('');
    const [novaData, setNovaData] = useState('');

    const Salvar = () => {
        if (inputNascimento === dataNascimento) {
          console.log('Email igual ao já cadastrado');
          return;
        }
        setNovaData(inputNascimento);
        setIsOpenDataNascimento(false)
      };

    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenDataNascimento(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenDataNascimento(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div class="coolinput">
                            <label for="input" className="text"> Data de Nascimento dia/mês/ano </label>
                            <input
                                type='number'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={inputNascimento}
                                onChange={(e) => setInputNascimento(e.target.value)}
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