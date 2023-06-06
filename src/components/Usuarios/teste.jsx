
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
  
  const EnviarPedidoAPI = (PedidoFinalizado) => {
    const pedidoString = JSON.stringify(PedidoFinalizado);
  
    api
      .post(`/inserirPedido/${pedidoString}`)
      .then(response => {
        console.log('Pedido finalizado enviado com sucesso!');
        // Faça algo com a resposta, se necessário
      })
      .catch(error => {
        console.error('Erro ao enviar o pedido finalizado:', error);
      });
  }
  
  const handleContinuar = () => {
    navigate('/');
  };
  
  const PedidoFinalizado = {
    cnpj: '',
    mesa: '2',
    pagamento: 'balcão',
    total: totalCart,
    items_pedido: compra
  };
  
  EnviarPedidoAPI(PedidoFinalizado);
  