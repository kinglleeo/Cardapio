import React from 'react'
import Header from '../../header/Header'
import Footer from '../../Footer/Footer'
import { Table, Column, AutoSizer } from 'react-virtualized'

export default function Porcoes(){
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
                                <Column Label='Porcoes' width={width} dataKey='null'
                                    cellRenderer={({ cellData }) =>{
                                        <div>
                                            <div>{ cellData.NomePorcao }</div>
                                            <div>{ cellData.DescricaoPorcao }</div>
                                            <div>{ cellData.PrecoPorcao }</div>
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