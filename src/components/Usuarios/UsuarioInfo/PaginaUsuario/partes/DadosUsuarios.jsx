import { React, useState, useEffect } from 'react'
import './info.css'
import ModalNome from './modalsDadosUser/ModalNome'
import ModalEmail from './modalsDadosUser/ModalEmail'
import ModalTelefone from './modalsDadosUser/ModalTelefone'
import ModalCpf from './modalsDadosUser/ModalCpf'
import ModalDataNascimento from './modalsDadosUser/ModalDataNascimento'
import ModalPhoto from './modalsDadosUser/ModalPhoto'

export default function DadosUsuarios({user, nome, email, telefone, cpf, dataNascimento, photo }){
    const [isOpenNome, setIsOpenNome] = useState(false);
    const [isOpenEmail, setIsOpenEmail] = useState(false);
    const [isOpenTelefone, setIsOpenTelefone] = useState(false);
    const [isOpenCpf, setIsOpenCpf] = useState(false);
    const [isOpenDataNascimento, setIsOpenDataNascimento] = useState(false);
    const [isOpenPhoto, setIsOpenPhoto] = useState(false);

    return(
        <div className='infos'>
                <div className='usuarioInfos'>
                    <img src={photo} className='fotoPerfil' onClick={()=> setIsOpenPhoto(true)} />
                    <div className='caixaiconeLogout'><div className='iconeLogout' onClick={()=> deslogar()}></div></div>
                    <div className='itemInfos'> {nome} 
                        <button className='BtnEditar' onClick={()=> setIsOpenNome(true)}> 
                            <div className='iconeEditar'></div>
                        </button>
                    </div>
                </div>
                <div className='listaInfos'>
                    <div className='boxDados'> 
                        <div className='infoTexto'> Email </div> 
                        <div className='infovar'> {email} </div>
                        <button className='BtnEditar' onClick={()=> setIsOpenEmail(true)}> 
                            <div className='iconeEditar'></div>
                        </button>
                    </div>
                    <div className='boxDados'> 
                        <div className='infoTexto'> Telefone </div>
                        <div className='infovar'> {telefone} </div>   
                        <button className='BtnEditar' onClick={()=> setIsOpenTelefone(true)}> 
                            <div className='iconeEditar'></div>
                        </button>
                    </div>
                    <div className='boxDados'> 
                        <div className='infoTexto'> Cpf </div> 
                        <div className='infovar'> {cpf} </div>
                        <button className='BtnEditar' onClick={()=> setIsOpenCpf(true)}> 
                            <div className='iconeEditar'></div>
                        </button>
                    </div>
                    <div className='boxDados' > 
                        <div className='infoTexto'> Data de Nascimento </div> 
                        <div className='infovar'> {dataNascimento} </div> 
                        <button className='BtnEditar'> 
                            <div className='iconeEditar' onClick={()=> setIsOpenDataNascimento(true)}></div>
                        </button>
                    </div>
                </div>


                <div>
                    {isOpenNome && <ModalNome nome={nome} setIsOpenNome={setIsOpenNome} />}
                    {isOpenEmail && <ModalEmail email={email} setIsOpenEmail={setIsOpenEmail} />}
                    {isOpenTelefone && <ModalTelefone telefone={telefone} setIsOpenTelefone={setIsOpenTelefone}/>}
                    {isOpenCpf && <ModalCpf cpf={cpf} setIsOpenCpf={setIsOpenCpf} />} 
                    {isOpenDataNascimento && <ModalDataNascimento dataNascimento={dataNascimento}  setIsOpenDataNascimento={setIsOpenDataNascimento} />} 
                    {isOpenPhoto && <ModalPhoto photo={photo} setIsOpenPhoto={setIsOpenPhoto} />} 
                </div>

        </div>
    )
}