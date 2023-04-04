import { React, useState, useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { Table, Column, AutoSizer } from 'react-virtualized'
import './Main.css'
import { useNavigate } from 'react-router-dom'
import { GiHamburger, GiFullPizza, GiWineBottle, GiFrenchFries } from 'react-icons/gi'
import axios from 'axios'

export default function Main (){
        const [apidata, setData]=useState([])
        const navigate = useNavigate
        console.log(apidata)
        useEffect(()=>{
            axios
                .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
                .then((getData)=>{
                    setData(getData.data)
                })
        }, [])

        const data = apidata
    return(
        <div className='main-main'> 
            <div>
                <Header/>
            </div>
            <div>
                <div className='barraDeDirecionamento'>
                    <div className='itembarraDeDirecionamento'>
                        <GiHamburger/>
                        <label>Lanches</label>
                    </div>
                    <div className='itembarraDeDirecionamento'>
                        <GiFullPizza/>
                        <label>Pizzas</label>
                    </div>
                    <div className='itembarraDeDirecionamento'>
                        <GiWineBottle/>
                        <label>Bebidas</label>
                    </div>
                    <div className='itembarraDeDirecionamento'>
                        <label>Pasteis</label>
                    </div>
                    <div className='itembarraDeDirecionamento'>
                        <GiFrenchFries/>
                        <label>Porções</label>
                    </div>                
                </div>
            </div>
        <div className='tabela-main'>
            <div className='container-main'>
                <div><label>Lanches</label></div>
                <div className='bloco-tabela'>
                <AutoSizer>
                            {({ height, width }) => (
                                <Table
                                height={500}
                                width={width}
                                rowCount={500}
                                headerHeight={50}
                                rowHeight={50}
                                rowGetter={({ index }) => data[index]}
                                >
                                <Column
                                    width={width}
                                    dataKey="NOMELANCHES"
                                    cellRenderer={({ cellData }) => (
                                    <div>
                                        <div>{cellData.DESCRICAOLANCHES}</div>
                                        <div>{cellData.VALORLANCHES}</div>
                                    </div>
                                    )}
                                />
                                </Table>
                            )}
                            </AutoSizer>
                </div>
                </div>
            <div className='container-main'>
                    <div><label>Pizzas</label></div>
                    <div className='bloco-tabela'>
                <AutoSizer>
                    {({ height, width })=>{
                        <Table
                            height={height}
                            width={width}
                            rowCount={500}
                            headerHeight={50}
                            rowHeight={50}
                            rowGetter={({ index }) => [index]}
                        >   
                            <Column width={width} dataKey='TAMANHOPIZZAS' cellRenderer={({ cellData })=>{
                                <div>
                                    <div>{ cellData.DESCRICAOPIZZA }</div>
                                    <div>{ cellData.VALORPIZZA }</div>
                                </div>
                            }} />
                        </Table>
                    }}
                </AutoSizer>
                </div>
            </div>
            <div className='container-main'>
                <div><label>Bebidas</label></div>
                <div className='bloco-tabela'>
                <AutoSizer>
                    {({ height, width })=>{
                        <Table
                            height={height}
                            width={width}
                            rowCount={500}
                            headerHeight={50}
                            rowHeight={50}
                            rowGetter={({ index }) => [index]}
                            
                        >   
                            <Column width={width} dataKey='NomeBebida' cellRenderer={({ cellData })=>{
                                <div>
                                    <div>{ cellData.DescricaoBebida }</div>
                                    <div>{ cellData.ValorBebida }</div>
                                </div>
                            }} />
                        </Table>
                    }}
                </AutoSizer>
                </div>
            </div>
            <div className='container-main'>
                <div><label>Pasteis</label></div>
                <div className='bloco-tabela'>
                <AutoSizer>
                    {({ height, width })=>{
                        <Table
                            height={height}
                            width={width}
                            rowCount={500}
                            headerHeight={50}
                            rowHeight={50}
                            rowGetter={({ index }) => [index]}
                        >   
                            <Column width={width} dataKey='NomePasteis' cellRenderer={({ cellData })=>{
                                <div>
                                    <div>{ cellData.DescricaoPasteis }</div>
                                    <div>{ cellData.ValorPasteis }</div>
                                </div>
                            }} />
                        </Table>
                    }}
                </AutoSizer>
                </div>
            </div>
            <div className='container-main'>
                <div><label>Porcoes</label></div>
                <div className='bloco-tabela'>
                <AutoSizer>
                    {({ height, width })=>{
                        <Table
                            height={height}
                            width={width}
                            rowCount={500}
                            headerHeight={50}
                            rowHeight={50}
                            rowGetter={({ index }) => [index]}
                        >
                            <Column width={width} dataKey='NomePorcoes' cellRenderer={({ cellData })=>{
                                <div>
                                    <div>{ cellData.DescricaoPorcoes }</div>
                                    <div>{ cellData.ValorPorcoes }</div>
                                </div>
                            }} />
                        </Table>
                    }}
                </AutoSizer>
                </div>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
} 