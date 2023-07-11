import { React, useState} from 'react'
import './modalUser.css'

export default function modal({ cpf, setIsOpenCpf}){
    const [inputCpf, setInputCpf] = useState('');
    const [novoCpf, setNovoCpf] = useState('');
    
    const Salvar = () => {
        if (inputCpf.length !== 12) {
          console.log('Valor digitado inválido');
          return;
        }
        if (inputCpf === cpf) {
          console.log('CPF igual ao já cadastrado');
          return;
        }
        setNovoCpf(inputCpf);
        setIsOpenCpf(false)
      };


    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenCpf(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenCpf(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                        <div class="coolinput">
                            <label for="input" className="text"> CPF xxx.xxx.xxx-xx </label>
                            <input
                                type='number'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={inputCpf}
                                onChange={(e) => setInputCpf(e.target.value)}
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