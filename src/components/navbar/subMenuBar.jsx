
export default function SubMenuBar({ subGruposList }){
   

 
    return(
        <div className='nav-subgrupos-box'>
            {Array.isArray(subGruposList) ? subGruposList.map((item)=>
                <div className='subgrupo-box' key={item.ID_SUBGRUPO} >
                    <div className='subgrupo-name' onClick={() => document.getElementById(item.ID_SUBGRUPO).scrollIntoView({ behavior: 'smooth' })}> {item.SUBGRUPO} </div>
                </div>
            ) : null}
        </div>
    )
}