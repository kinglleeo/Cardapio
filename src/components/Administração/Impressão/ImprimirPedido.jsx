import React, { useRef, useEffect, useState } from 'react';
import ReactToPrint from 'react-to-print';
import './imprimirpedido.css'


const PrintableContent = React.forwardRef(({ itemPedido, dadosCompraPedido }, ref) => {
    const [dados, setDados] = useState('');
    const [empresa, setEmpresa] = useState('');
    
    useEffect(()=>{
        const empresa = localStorage.getItem('empresa')
            setEmpresa(JSON.parse(empresa))
        const dados = localStorage.getItem('dados');
            setDados(JSON.parse(dados))
    }, []);


  return (
    <div ref={ref}>
      <div className='corpoImprecao'>
        <div className='dadosRestaurante'>
            {Array.isArray(empresa) ? (
              empresa.map((item)=>
              <div className='infoRestaurante'>
                <div className='nomeRestaurante'>{item.NOME_FANTASIA}</div>
                <div className='cnpjRestaurante'>Cnpj: {dados.cnpj}</div>
                <div className='telefoneRestaurante'>Fone: {item.WHATS.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")}</div>
                <div className='enderecoRestaurante'> {item.LOGRADOURO + ", " + item.BAIRRO + ", N°" + " " + item.NUMERO + ", " + item.CIDADE + " - " + item.UF}</div>
              </div>
              )  
            ) : null}
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div className='linhaPedido'>
                <div>Pedido: {itemPedido !== undefined ? itemPedido.ID_PEDIDO : null}</div>
                <div>Data: {itemPedido.DATA}</div>
            </div>
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div className='linhaPedido'>
                <div>{itemPedido !== undefined ? itemPedido.TIPOCOMANDA : null}</div>
                <div>Hora: {itemPedido.HORA}</div>
            </div>
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div className='linhaFormaDePagamento'>
                <div>Pagamento </div>
            </div>
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div className='dadosCliente'>
                {Array.isArray(empresa) ? (
                    empresa.map((item)=>
                    <div className='infoRestaurante'>
                        <div className='nomeRestaurante'>{item.NOME_FANTASIA}</div>
                        <div className='cnpjRestaurante'>Cnpj: {dados.cnpj}</div>
                        <div className='telefoneRestaurante'>Fone: {item.WHATS.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")}</div>
                        <div className='enderecoRestaurante'> {item.LOGRADOURO + ", " + item.BAIRRO + ", N°" + " " + item.NUMERO + ", " + item.CIDADE + " - " + item.UF}</div>
                    </div>
                    )  
                ) : null}
            </div>
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div className='descricaoTabelaPedidos'></div>
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div className='tabelaPedidos'>
                {Array.isArray(dadosCompraPedido) ? (
                    dadosCompraPedido.map((item)=>
                    <div className='infoRestaurante'>
                        <div>
                            <div className='nomeRestaurante'>{item.QTDE_COM}</div>
                            <div className='cnpjRestaurante'>{item.DESCRICAO}</div>
                        </div>
                        <div>
                            <div className='nomeRestaurante'>{item.OPCOES}</div>
                            <div className='cnpjRestaurante'>{item.SABORES}</div>
                        </div>
                        
                    </div>
                    )  
                ) : null}
            </div>
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div className='linhaValores'>
                <div> Itens: </div>
                <div> Produtos: </div>
            </div>
            <div className='linhaValores'>
                <div>Qtd. Produ: </div>
                <div>Serviços: </div>
            </div>
            <div className='linhaValores'>
                <div></div>
                <div>Descontos: </div>
            </div>
            <div className='linhaValores'>
                <div></div>
                <div>------------------</div>
            </div>
            <div className='linhaValores'>
                <div></div>
                <div>Total: {itemPedido.TOTAL}</div>
            </div>
        <div className='espaçoEntreLinhas'>----------------------------------------------------------------------------------</div>
            <div>Colaborador: </div>
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
        trigger={() => <button>Gerar PDF e Imprimir</button>}
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
