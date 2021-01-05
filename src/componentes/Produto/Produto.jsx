import React, {useState, useEffect} from 'react'
import Caminho from './Caminho'
import '../css/Produto.css'
import ImagemProduto from './ImagemProduto'
import Detalhes from './Detalhes'
import TituloProdutoMobile from './TituloProdutoMobile'
import axios from 'axios'

export default function Produto() {

    const [ produto, setProduto ]= useState() 


      useEffect(() => {
        axios.get(`http://localhost:3000/produtos/1`)
          .then(res => {
                setProduto(res.data)
                console.log(produto)
          })
      },[produto])


    return (
        <div className="Produto container-fluid">
            <div className="produto-desktop">
                <Caminho link="/" nome="Sapatos" />
                <div className="row details">
                    <ImagemProduto />
                    <Detalhes titulo="Rasteira tira dedo" sku="RT 0568 | 03.07.0653" />
                </div>
            </div>
            <div className="produto-mobile">
                <TituloProdutoMobile titulo="Rasteira tira dedo" sku="RT 0568 | 03.07.0653" />
                <ImagemProduto />
                <Detalhes />
            </div>
        </div>
    )
}