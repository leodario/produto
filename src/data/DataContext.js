import React from 'react' 

export const data = {
    produto: {
        sku: 'RT 0568 | 03.07.0653',
        cor: '#A9095E',
        nomeCor: 'fucsia',
        tamanho: 37,
        nomeProduto: 'Rasteira Tira Dedo',
        quantidadeCarrinho: 0
    },
    carrinho: {
        total: 0.00,
        parcelado: 0.00,
        quantidade: 0
    }
}

const DataContext = React.createContext(data)

export default DataContext