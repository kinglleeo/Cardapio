import './modalUser.css'

export default function modal({ nome, setNome, setIsOpenNome}){

    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenNome(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenNome(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                </div>
            </div>
        </div>
    </>
  );
};