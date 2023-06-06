const queryClient = useQueryClient();
const listaOpcionais = queryClient.getQueryData(['listaOpcionais', grupoOpcoes, idProduto]);

