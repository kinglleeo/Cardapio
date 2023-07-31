import React, { useRef, useEffect, useState } from 'react';
import ReactToPrint from 'react-to-print';
import './imprimirpedido.css'
import { api } from '../../../conecções/api';
import Decimal from 'decimal.js';

const PrintableContent = React.forwardRef(({ itemPedido, dadosCompraPedido }, ref) => {
    const [dados, setDados] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [dadosCliente, setDadosClientes] = useState('');
    const [endereco, setEndereco] = useState('')
    const [totalItems, setTotalItems] = useState('')
    const uidToken = itemPedido.FIREBASE_TOKEN
    const enderecoId = itemPedido.ID_ENDERECO
  console.log(totalItems)

  useEffect(() => {
    if (dadosCompraPedido && Array.isArray(dadosCompraPedido)) {
      let total = new Decimal(0);
      dadosCompraPedido.forEach(item => {
        total = total.plus(new Decimal(item.QTDE_COM || 0).times(item.TOTAL || 0));
      });


      setTotalItems(total);
    }
  }, [dadosCompraPedido]);

    function formataData(){
        let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth()+1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
    }

    const formCurrency = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2
    })
    
    useEffect(()=>{
        const empresa = localStorage.getItem('empresa')
            setEmpresa(JSON.parse(empresa))
        const dados = localStorage.getItem('dados');
            setDados(JSON.parse(dados))

        api
            .get(`/dadosCliente/${uidToken}`)
            .then((getdata)=>{
                setDadosClientes(getdata.data)
            })
            .catch((error) => {
                setError("Erro no dadosCliente")
                setModalError(true)
            });
        api
            .get(`/enderecos/${uidToken}`)
            .then((getdata) => {
              const filteredEndereco = getdata.data.find((endereco) => endereco.ID === enderecoId);
          
              if (filteredEndereco) {
                setEndereco(filteredEndereco);
              } else {
                setError("Endereco não encontrado");
                setModalError(true);
              }
            })
            .catch((error) => {
              setError("Erro ao obter enderecos");
              setModalError(true);
            });
    }, [uidToken, enderecoId]);


  return (
    <div ref={ref}>
      <div className='corpoImprecao'>
        <div className='papelzinho'>
          <div className='dadosRestaurante'>
            {Array.isArray(empresa) ? (
              empresa.map((item)=>
              <div className='infoRestaurante'>
                <div className='nomeRestaurante'>{item.NOME_FANTASIA}</div>
                <div className='cnpjRestaurante'>CNPJ: {dados.cnpj}</div>
                <div className='telefoneRestaurante'>Fone: {item.WHATS.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")}</div>
                <div className='enderecoRestaurante'> {item.LOGRADOURO.toLowerCase() + ", " + item.BAIRRO + ", N°" + " " + item.NUMERO + ", " + item.CIDADE + " - " + item.UF}</div>
              </div>
              )  
            ) : null}
          </div>
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
            <div className='linhaPedido'>
                <div>Pedido: {itemPedido !== undefined ? itemPedido.ID_PEDIDO : null}</div>
                <div>Data: {formataData(itemPedido.DATA)}</div>
            </div>
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
            <div className='linhaPedido'>
                <div>{itemPedido !== undefined ? itemPedido.TIPOCOMANDA : null}</div>
                <div>Hora: {itemPedido.HORA}</div>
            </div>
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
            <div className='linhaFormaDePagamento'>
                <div>Pagamento </div>
                <div>{itemPedido.DESCRICAO_PAGAMENTO}</div>
            </div>
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
            <div className='infoCliente'>
            {Array.isArray(dadosCliente) ? (
                dadosCliente.map((item)=>
                <div className='infoCliente'>
                    <div className='nomeCliente'>Cliente: {item.nome}</div>
                    <div className='telefoneCliente'>Telefone: {item.numero_telefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")}</div>
                    <div className='enderecoRua'>Rua: {endereco.RUA}</div>
                    <div className=''>Número: {endereco.NUMERO}</div>
                    <div className='enderecoBairro'>Bairro: {endereco.BAIRRO}</div>
                    <div className='enderecoCidade'>Cidade: {endereco.CIDADE}</div>
                    <div className='enderecoReferencia'>Referencia: {endereco.REFERENCIA}</div>
                </div>
                )  
                ) : null}
            </div>
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
        <div className='descricaoTabelaPedidos'>
            <div className='idItem'>Cód</div>
            <div className='descricaoItem'>Descrição</div>
            <div className='tamanhoItem'>Tam</div>
            <div className='qtdeItem'>Qtde</div>
            <div className='unitItem'>Unit</div>
            <div className='totalItem'>Total</div>
        </div>
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
            <div className='tabelaPedidos'>
            {Array.isArray(dadosCompraPedido) ? (
                dadosCompraPedido.map((item)=>
                <div>
                  <div className='descricaoTabelaPedidos'>
                    <div className='idItem'>{item.ID}</div>
                    <div className='descricaoItem'>{item.DESCRICAO !== null ? item.DESCRICAO.toLowerCase() : null}</div>
                    <div className='tamanhoItem'>{item.TAMANHO}</div>
                    <div className='qtdeItem'>{item.QTDE_COM}</div>
                    <div className='unitItem'>{formCurrency.format(item.TOTAL)}</div>
                    <div className='totalItem'>{formCurrency.format(item.TOTAL*item.QTDE_COM)}</div>
                  </div>
                  {item.SABORES !== null ? (
                    <div className='descricaoTabelaPedidos'>
                      Sabores: {item.SABORES !== null ? item.SABORES.toLowerCase() : null}
                    </div>
                  ):null}
                    {item.OPCOES !== null ? (
                      <div className='descricaoTabelaPedidos'>
                        Adicionais: {item.OPCOES !== null ? item.OPCOES.toLowerCase() : null}
                      </div>
                    ) : null}
                </div>
                )  
                ) : null}
            </div>
            {itemPedido.OBSERVACOES !== "" ? (
              <div>
                <div className='espaçoEntreLinhas'>--------------------------------------------</div>
                  <div>Observações: {itemPedido.OBSERVACOES}</div>
              </div>
            ) : null}
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
            <div className='linhaValores'>
                <div></div>
                <div> Produtos: {formCurrency.format(totalItems)}</div>
            </div>
            <div className='linhaValores'>
                <div></div>
                <div> Entrega: {formCurrency.format(itemPedido.TAXA_ENTREGA)}</div>
            </div>
            <div className='linhaValores'>
                <div></div>
                <div>-----------------</div>
            </div>
            <div className='linhaValores'>
                <div></div>
                <div>Total: {formCurrency.format(itemPedido.TOTAL)}</div>
            </div>
        <div className='espaçoEntreLinhas'>--------------------------------------------</div>
            <div>Colaborador: App Web</div>
        </div>
        </div>
      </div>
      
  );
});

// Componente que controla o processo de impressão
const PrintDeliveryOrder = ({itemPedido, dadosCompraPedido}) => {
  const componentRef = useRef();
    console.log(itemPedido)
    console.log(dadosCompraPedido)
  return (
    <div>
      {/* Componente "PrintableContent" é passado para "ReactToPrint" */}
      <ReactToPrint
        trigger={() => <button className='btnImpressão'><div className='iconeImpressora'></div></button>}
        content={() => componentRef.current}
      />
      {/* Componente "PrintableContent" é referenciado aqui */}
      <div style={{ display: 'none' }}>
      <PrintableContent
          ref={componentRef}
          itemPedido={itemPedido} 
          dadosCompraPedido={dadosCompraPedido}
        />
      </div>
    </div>
  );
};

export default PrintDeliveryOrder;
