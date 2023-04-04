import React from 'react'
import Header from '../../header/Header'
import Footer from '../../Footer/Footer'
import './Bebidas.css'
import { Table, Column, AutoSizer } from 'react-virtualized'

export default function Bebidas(){
    return(
        
           <div> 
            <div>
                <Header/>
            </div>
            <div>
                <AutoSizer>
                    {({ height, width }) =>{
                        <Table
                            height={height}
                            width={width}
                            rowCount={500}
                            headerHeight={50}
                            rowHeight={50}
                            rowGetter={({ index}) => data[index]}
                        >
                                <Column Label='Bebidas Alcoolicas' width={width} dataKey='null'
                                    cellRenderer={({ cellData }) =>{
                                        <div>
                                            <div>{ cellData.NomeBebidasAlcoolicas }</div>
                                            <div>{ cellData.PrecoBebidasAlcoolicas }</div>
                                        </div>
                                    }}
                                />
                        </Table>
                    }}
                </AutoSizer>
            </div>
            <div>
                <AutoSizer>
                    {({ height, width }) =>{
                        <Table
                            height={height}
                            width={width}
                            rowCount={500}
                            headerHeight={50}
                            rowHeight={50}
                            rowGetter={({ index}) => data[index]}
                        >
                                <Column Label='Refrigerantes' width={width} dataKey='null'
                                    cellRenderer={({ cellData }) =>{
                                        <div>
                                            <div>{ cellData.NomeRefrigerantes }</div>
                                            <div>{ cellData.PrecoRefrigerantes }</div>
                                        </div>
                                    }}
                                />
                        </Table>
                    }}
                </AutoSizer>
            </div>
            <div>
                <Footer/>
            </div>
            </div>
        
    )
}