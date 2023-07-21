import { React, useState, useEffect} from 'react'
import '../../../../Styles/StyleEndereco.css'
import { api } from '../../../../conecções/api';
import ModalError from '../../../erros/ModalError'

export default function modal({ user, item, setIsOpenModalEndereco}){
    const [apelido, setApelido] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [referencia, setReferencia] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [idCidade, nomeCidade] = cidade.split('|');
    const [idBairro, nomeBairro] = bairro.split('|');
    const [cidadesAceitas, setCidadesAceitas] = useState('');
    const [bairrosAceitos, setBairrosAceitos] = useState('');
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
   
    useEffect(()=>{
        setApelido(item.APELIDO)
        setRua(item.RUA)
        setReferencia(item.REFERENCIA)
        setNumero(item.NUMERO)
        setBairro(item.BAIRRO)
        setCidade(item.CIDADE)
    }, [])

    useEffect(()=>{
        api
            .get('/cidades')
            .then((getdata)=>{
                setCidadesAceitas(getdata.data)
            })
            .catch((error) => {
                setError("Erro no cidades")
                setModalError(true)
            });
    }, [])
    const handleCidade=(event)=>{
        setCidade(event)
        pegarBairro(event);
    }

    const pegarBairro=(event)=>{
        const [idCidade, nomeCidade] = event.split('|');
        api
            .get(`/bairros/${idCidade}`)
            .then((response) => {
               setBairrosAceitos(response.data);
            })
            .catch((error) => {
                    setError("Erro no bairros")
                    setModalError(true)
                });
    }

    const excluirEndereco=(item)=>{
        api
            .post('/excluirEndereco', {
                id: item.ID
            })
            .then((response)=>{
                window.location.reload()
            })
            .catch((error) => {
                setError("Erro no excluirEndereco")
                setModalError(true)
            });
    }
    
    const Salvar = () => {
        api
            .post(`/alterarEndereco`, {
                firebase_token: user.uid,
                apelido: apelido,
                rua: rua,
                numero: numero,
                referencia: referencia,
                id_cidade: idCidade,
                id_bairro: idBairro,
                bairro: bairro,
                id_garline: item.ID
            })
            .then((response)=>{
                if(response.data === -500){
                    setError("Verifique as Informações Preenchidas")
                    setModalError(true)
                } else if (response.data === 200){
                    alert('Salvo')
                    window.location.reload()
                }
            })
            .catch((error) => {
                setError(error.message)
                setModalError(true)
            });
    };
      
    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenModalEndereco(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenModalEndereco(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div className='itensModal'>
                        <div className="coolinput">
                            <label htmlFor="input" className="text"> Apelido </label>
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
                            <label htmlFor="input" className="text"> Rua </label>
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
                            <label htmlFor="input" className="text"> Numero </label>
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
                            <label htmlFor="input" className="text"> Referencia </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={referencia}
                                onChange={(e)=> setReferencia(e.target.value)}
                            />
                        </div>
                        <div className="coolinput">
                            <label htmlFor="input" className="text"> Cidade </label>
                            <select id="escolha" name="escolha" className='select' onChange={(event) => handleCidade(event.target.value)}>
                                <option value="">Selecione uma cidade</option>
                                {Array.isArray(cidadesAceitas) ? (
                                    cidadesAceitas.map((item) => (
                                        <option key={item.ID} value={`${item.ID}|${item.NOME}`}> {item.NOME} </option>
                                    ))
                                ) : null}
                            </select>
                        </div>
                        <div className="coolinput">
                            <label htmlFor="input" className="text"> Bairro </label>
                            <select id="escolha" name="escolha" className='select' onChange={(event) => setBairro(event.target.value)}>
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
                    <button className='enderecobtn' onClick={()=> Salvar()}> Salvar </button>
                </div>
                <div>
                    <button className='btnExcluirEndereco' onClick={()=> excluirEndereco(item)}> Excluir Endereco </button>
                </div>
                {modalError && <ModalError setModalError={setModalError} error={error} />}
            </div>
        </div>
    </>
  );
};