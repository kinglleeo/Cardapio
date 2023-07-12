import { React, useState} from 'react'
import './dados.css'
import axios from 'axios';

export default function modal({ user, item, setIsOpenUserDados}){
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    console.log(item)
    
    const Salvar = () => {
        axios
            .put(`http://192.168.0.100:9865/alterarDadosCliente/${user.uid}`, {
                nome: nome,
                telefone: telefone,
                dataNascimento: dataNascimento
            })
            .then((response)=>{
                alert('Dados Salvos')
                setIsOpenUserDados(false)
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    function formataData(){
        let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth()+1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
    }
      
    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenUserDados(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenUserDados(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div className='itensModal'>
                        <div class="coolinput">
                            <label for="input" className="text"> Nome </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={item.nome}
                                onChange={(e)=> setNome(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Celular (xx) xxxxx-xxxx </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={item.numero_telefone}
                                onChange={(e)=> setTelefone(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Data de Nascimento xx/xx/xxxx </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={formataData(item.data_nascimento)}
                                onChange={(e)=> setDataNascimento(e.target.value)}
                            />
                        </div>
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