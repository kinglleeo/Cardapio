import React from 'react'
import Header from '../../header/Header'
import Footer from '../../Footer/Footer'
import './Pizzas.css'
import { Table, Column, AutoSizer } from 'react-virtualized'

export default function Pizzas(){
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
                                <Column Label='Pizzas Salgadas' width={width} dataKey='null'
                                    cellRenderer={({ cellData }) =>{
                                        <div>
                                            <div>{ cellData.NomePizzasSalgadas }</div>
                                            <div>{ cellData.DescricaoPizzasSalgadas }</div>
                                            <div>{ cellData.PrecoPizzasSalgadas }</div>
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