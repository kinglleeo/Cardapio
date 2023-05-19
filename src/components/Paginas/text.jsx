const queryClient = useQueryClient();
const listaOpcionais = queryClient.getQueryData(['listaOpcionais', grupoOpcoes, idProduto]);

useEffect(() => {
    const calcularTotal = () => {  
      let valorTotal = new Decimal(0);
        listasAdicionais.forEach((item) => {
          const quantidade = item.quantidade;
          const valor = new Decimal(item.VALOR_VENDA || 0);
          const subtotal = valor.times(quantidade);
            valorTotal = valorTotal.plus(subtotal);
        });
      return formCurrency.format(valorTotal)
    };
  console.log(calcularTotal())
  }, [listasAdicionais]);

  const selecionarListaProdutosAdicionais = (ID_GRUPO_OPCOES, idProduto) => {
    const cachedData = queryClient.getQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto]);
    if (cachedData) {
      setListaAdicionais(cachedData);
    } else {
      api.get(`/listaOpcionais/${ID_GRUPO_OPCOES}/${idProduto}`).then((getdata) => {
        const data = getdata.data.map((item) => ({
          ...item,
          quantidade: 0,
        if (cachedData) {
            setListaAdicionais(cachedData);
        } else {
            api.get(`/listaOpcionais/${ID_GRUPO_OPCOES}/${idProduto}`).then((getdata) => {
            const data = getdata.data.map((item) => ({
                ...item,
                quantidade: 0,
        }));
        setListaAdicionais(data);
        queryClient.setQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto], data);
      });
            setListaAdicionais(data);
                queryClient.setQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto], data);
        updateQuantitiesMutation.mutate({ ID_GRUPO_OPCOES, idProduto, listaAdicionais: data });
    });
    }
  };
      

};