useEffect(() => {
    listaAdicionaisCache.forEach((listaAdicionais) => {
      const updatedListaAdicionais = listaAdicionais.filter((item) => item.quantidade > 0);
      setAdicionalSelecionado((prevSelecionados) => [...prevSelecionados, ...updatedListaAdicionais]);
    });
  }, [listaAdicionaisCache]);



  useEffect(() => {
    listaAdicionaisCache.forEach((listaAdicionais) => {
      listaAdicionais.forEach((item) => {
        if (item.quantidade > 0) {
          setAdicionalSelecionado(item);
        }
      });
    });
  }, [listaAdicionaisCache]);