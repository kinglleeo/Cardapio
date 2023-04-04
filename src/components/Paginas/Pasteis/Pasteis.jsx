import React from 'react'
import Header from '../../header/Header'
import Footer from '../../Footer/Footer'
import './Pasteis.css'
import { Table, Column, AutoSizer } from 'react-virtualized'

export default function Pasteis(){
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
                                <Column Label='Pasteis Salgados' width={width} dataKey='null'
                                    cellRenderer={({ cellData }) =>{
                                        <div>
                                            <div>{ cellData.NomePasteisSalgados }</div>
                                            <div>{ cellData.DescricaoPasteisSalgados }</div>
                                            <div>{ cellData.PrecoPasteisSalgados }</div>
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
                                <Column Label='Pasteis Doces' width={width} dataKey='null'
                                    cellRenderer={({ cellData }) =>{
                                        <div>
                                            <div>{ cellData.NomePasteisDoces }</div>
                                            <div>{ cellData.DescricaoPasteisSalgados }</div>
                                            <div>{ cellData.PrecoPasteisDoces }</div>
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