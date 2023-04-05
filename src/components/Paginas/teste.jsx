const [mini, setMini] = useState('')
    const [pequena, setPequena] = useState('')
    const [media, setMedia] = useState('')
    const [grande, setGrande] = useState('')
    const [familia, setFamilia] = useState('')



    const handleSubmit = ()=>{
        localstorage.setItem('mini', mini)
        localstorage.setItem('pequena', pequena)
        localstorage.setItem('media', media)
        localstorage.setItem('grande', grande)
        localstorage.setItem('familia', familia)
} 
    