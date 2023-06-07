
  useEffect(() => {
    listaSaboresPizzas.forEach((item) => {
      if (item.quantidade > 0) {
        const itemIndex = selecionados.findIndex((selecionado) => selecionado.ID_GRADE === item.ID_GRADE);
        if (itemIndex === -1) {
          setSelecionados((prevSelecionados) => [...prevSelecionados, { ...item }]);
        } else {
          setSelecionados((prevSelecionados) => {
            const updatedSelecionados = [...prevSelecionados];
            updatedSelecionados[itemIndex].quantidade = item.quantidade;
            return updatedSelecionados;
          });
        }
      }
    });
  }, [listaSaboresPizzas]);
  
.then(response => {
      console.log('Pedido finalizado enviado com sucesso!');
    })
  .catch(error => {
    console.error('Erro ao enviar o pedido finalizado:', error);
  });