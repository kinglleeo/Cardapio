const [searchQuery, setSearchQuery] = useState('')

const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const filteredData = apiData.filter((data) =>
  (data.cnpj && data.cnpj.includes(searchQuery)) || 
  (data.razaosocial && data.razaosocial.toLowerCase().includes(searchQuery.toLowerCase()))
 )

 <div className='barradepesquisa'>
                    <div className="search">
                        <input type="text" className='input-search' placeholder="Busca..."value={searchQuery} onChange={handleSearchInputChange}/>
                    </div>
              </div> 