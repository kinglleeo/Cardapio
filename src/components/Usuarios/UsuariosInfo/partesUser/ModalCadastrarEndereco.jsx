import { React, useState} from 'react'
import './dados.css'
import axios from 'axios';
import { useEffect } from 'react';

export default function modal({ user, setIsOpenCadastrarEndereco}){
    const [apelido, setApelido] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [referencia, setReferencias] = useState('');
    const [cidade, setCidade] = useState('');
    const [idCidade, nomeCidade] = cidade.split('|');
    const [bairro, setBairro] = useState('');
    const [idBairro, nomeBairro] = bairro.split('|');
    const [cidadesAceitas, setCidadesAceitas] = useState([]);
    const [bairrosAceitos, setBairrosAceitos] = useState([]);
    
    useEffect(()=>{
        axios
            .get('http://192.168.0.100:9865/cidades')
            .then((getdata)=>{
                setCidadesAceitas(getdata.data)
            })
    }, [])


    const handleCidade=(event)=>{
        setCidade(event)
        pegarBairro(event);
    }

    const pegarBairro=(event)=>{
        const [idCidade, nomeCidade] = event.split('|');
        axios
            .get(`http://192.168.0.100:9865/bairros/${idCidade}`)
            .then((response) => {
               setBairrosAceitos(response.data);
            })
            .catch((error) => {
               console.error(error);
            });
    }
    const salvar =()=>{
        axios
            .post(`http://192.168.0.100:9865/insereEndereco`,{
                firebase_token: user.uid,
                apelido: apelido,
                rua: rua,
                numero: numero,
                referencia, referencia,
                id_cidade: idCidade,
                id_bairro: idBairro,
                bairro: nomeBairro
            })
            .then((response) => {
                if(response.data === -400){
                    alert('Endereco ja Cadastrado')
                } else if (response.data === 200){
                    window.location.reload()
                }
                console.log(response)
            .catch((error) => {
                console.error(error);
            });
        })
    }
    
    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenCadastrarEndereco(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenCadastrarEndereco(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div className='itensModal'>
                        <div class="coolinput">
                            <label for="input" className="text"> Apelido </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={apelido}
                                onChange={(e)=> setApelido(e.target.value)}
                            />
                        </div>
                        <div className="coolinput">
                            <label for="input" className="text"> Rua </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={rua}
                                onChange={(e)=> setRua(e.target.value)}
                            />
                        </div>
                        <div className="coolinput">
                            <label for="input" className="text"> Numero </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={numero}
                                onChange={(e)=> setNumero(e.target.value)}
                            />
                        </div>
                        <div className="coolinput">
                            <label for="input" className="text"> Referencia </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={referencia}
                                onChange={(e)=> setReferencias(e.target.value)}
                            />
                        </div>
                        <div className="coolinput">
                                <div>Cidade</div>
                            <select id="escolha" name="escolha" onChange={(event) => handleCidade(event.target.value)}>
                                <option value="">Selecione uma cidade</option>
                                {Array.isArray(cidadesAceitas) ? (
                                    cidadesAceitas.map((item) => (
                                        <option key={item.ID} value={`${item.ID}|${item.NOME}`}> {item.NOME} </option>
                                    ))
                                ) : null}
                            </select>
                        </div>
                        <div className="coolinput">
                        <div> Bairro </div>
                        <select id="escolha" name="escolha" onChange={(event) => setBairro(event.target.value)}>
                                <option value="">Selecione uma cidade</option>
                                {Array.isArray(bairrosAceitos) ? (
                                    bairrosAceitos.map((item) => (
                                        <option key={item.ID} value={`${item.ID}|${item.DESCRICAO}`}> {item.DESCRICAO} </option>
                                    ))
                                ) : null}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btnSalvar enderecobtn' onClick={()=> salvar()}> Salvar </button>
                </div>
            </div>
        </div>
    </>
  );
};