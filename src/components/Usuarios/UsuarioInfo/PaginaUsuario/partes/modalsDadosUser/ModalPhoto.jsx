import './modalUser.css'

export default function modal({ photo, setphoto, setIsOpenPhoto}){

    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenPhoto(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenPhoto(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'>
                    <div className='modalTitulo'> Editar </div>
                </div>
            </div>
        </div>
    </>
  );
};