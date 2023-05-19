
ListaProdutosAdicionais 
const increaseQuantity = (index) => {
    setListaAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade + 1;
      return updatedAdicionais;
    });
    setQuantidadeTotal(quantidadeTotal + 1);
  
    setGruposAdicionais((prevGruposAdicionais) => {
      const updatedGruposAdicionais = [...prevGruposAdicionais];
      const item = updatedGruposAdicionais.find((item) => item.ID_GRUPO_OPCOES === idGrupoOpcoes);
      const adicional = listasAdicionais[index];
      item.totalDaLista = new Decimal(item.totalDaLista).plus(adicional.VALOR_VENDA).toNumber();
      return updatedGruposAdicionais;
    });
  };
  
  const decreaseQuantity = (index) => {
    setListaAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      if (updatedAdicionais[index].quantidade) {
        updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade - 1;
  
        setGruposAdicionais((prevGruposAdicionais) => {
          const updatedGruposAdicionais = [...prevGruposAdicionais];
          const item = updatedGruposAdicionais.find((item) => item.ID_GRUPO_OPCOES === idGrupoOpcoes);
          const adicional = listasAdicionais[index];
          item.totalDaLista = new Decimal(item.totalDaLista).minus(adicional.VALOR_VENDA).toNumber();
          return updatedGruposAdicionais;
        });
      }
      return updatedAdicionais;
    });
  
    if (quantidadeTotal > 0) {
      setQuantidadeTotal(quantidadeTotal - 1);
    }
  };
  
  useEffect(()=>{
    let descricao = ""
        listaOpcionaisCache.forEach((listaOpcionais) =>{
            listaOpcionais.forEach((item) =>{
                descricao +=  item.quantidade + " X " + item.DESCRICAO + " / "
            })
            setDescricao(descricao)
        })
}, [listaOpcionaisCache]);