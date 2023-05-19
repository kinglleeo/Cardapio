const selecionarListaProdutosAdicionais = (ID_GRUPO_OPCOES, idProduto) => {
    const cachedData = queryClient.getQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto]);
    if (cachedData) {
      setListaAdicionais(cachedData);
      setIdGrupoOpcoes(ID_GRUPO_OPCOES);
    } else {
      api.get(`/listaOpcionais/${ID_GRUPO_OPCOES}/${idProduto}`).then((getdata) => {
        const data = getdata.data.map((item) => ({
          ...item,
          quantidade: 0,
        }));
  
        // Calculate totalDaLista and update gruposAdicionais
        const updatedGruposAdicionais = gruposAdicionais.map((grupo) => {
          const totalDaLista = data
            .filter((item) => item.ID_GRUPO_OPCOES === grupo.ID_GRUPO_OPCOES)
            .reduce(
              (accumulator, item) =>
                Decimal(accumulator).add(Decimal(item.VALOR_VENDA).mul(item.quantidade)),
              0
            );
          return { ...grupo, totalDaLista };
        });
  
        setGruposAdicionais(updatedGruposAdicionais);
        setListaAdicionais(data);
        setIdGrupoOpcoes(ID_GRUPO_OPCOES);
        queryClient.setQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto], data);
        updateQuantitiesMutation.mutate({ ID_GRUPO_OPCOES, idProduto, listaAdicionais: data });
      });
    }
  };
  