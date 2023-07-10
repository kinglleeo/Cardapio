{listaGrupoOpcionais.PERMITIR_ITEM_REPETIDO === "SIM", listaGrupoOpcionais.MINIMO > 1 
                              ? (
                                <AdicionaisPorQuantidade
                                  setQuantidadeTotal={setQuantidadeTotal}
                                  listaAdicionais={listaAdicionais}
                                  setListaAdicionais={setListaAdicionais}
                                />
                              )
                              : listaGrupoOpcionais.PERMITIR_ITEM_REPETIDO === "NAO", listaGrupoOpcionais.MINIMO > 1
                                ? (<div> checkbox </div>)
                              : listaGrupoOpcionais.PERMITIR_ITEM_REPETIDO === "NAO", listaGrupoOpcionais.MINIMO < 2
                                ? (<div> radio </div>) : (<div></div>) 
                            }
