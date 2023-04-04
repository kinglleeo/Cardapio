import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../Footer/Footer'
import { Table, Column, AutoSizer } from 'react-virtualized'
import './Lanches.css'
import axios from 'axios'

export default function Lanches(){
    const [data, setData] = useState([])

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
            .then((getData)=>{
                setData(getData.data)
            })
    }, [])

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
                                <Column Label='Lanches' width={width} dataKey='null'
                                    cellRenderer={({ cellData }) =>{
                                        <div>
                                            <div>{ cellData.NomeLanches }</div>
                                            <div>{ cellData.DescricaoLanches }</div>
                                            <div>{ cellData.PrecoLanches }</div>
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