// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import '../css/Detalhes.css'
import Preco from './Preco'
import Cores from './Cores'
import Tamanhos from './Tamanhos'
import Descricao from './Descricao'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import imagem from '../img/prod02.png'
// eslint-disable-next-line no-unused-vars
import Botao from '../Botao'
import DataContext from '../../data/DataContext'


function rand() {
    return Math.round(Math.random() * 20) - 10;
}


function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



export default function Detalhes(props) {

    const context = useContext(DataContext)

    function addProduto(nomeProduto, precoProduto, fotoProduto) {

        context.setState({
            ...context.state,
            carrinho: {
                quantidade: context.state.carrinho.quantidade + 1,
                total: context.state.carrinho.total + precoProduto,
                parcelado: context.state.carrinho.total / 3,
                produto : [{
                    nomeProduto : nomeProduto,
                    precoProduto : precoProduto,
                    fotoProduto : fotoProduto
                }],
            } 
        })
        console.log(context.state)
    }

    //estilos e funções do modal
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        addProduto(props.titulo, 55.22, imagem)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <button className="botao-fechar" onClick={handleClose}>X</button>
            <p id="simple-modal-description" className="descricao-modal mobile">
                Produto adicionado com sucesso!
            </p>
            <img src={imagem} alt="imagem modal" className="Imagem-modal" />
            <p id="simple-modal-description" className="descricao-modal desktop">
                Produto adicionado com sucesso!
            </p>
            <button type="button" className="Botao">Finalizar compra</button>
            <button type="button" onClick={handleClose} className="fechar-modal">Continuar Comprando</button>
        </div>
    );



    return (
        <div className="col-md-6 col-12">
            <div className="Detalhes desktop-detalhes">
                <h2 className="Titulo-produto">{props.titulo}</h2>
                <span className="SKu">{props.sku}</span>
                <Preco precoNormal="69,00" promocional="55,22" numeroParcelas="6" valorParcelas="9,20" />
                <Cores />
                <Tamanhos />
                <button type="button" onClick={handleOpen} className="Botao">Adicionar a sacola</button>
                <Descricao
                    texto="Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal."
                />


            </div>

            <div className="mobile-detalhes">
                <Cores />
                <Tamanhos />
                <div className="row">
                    <div className="col-6">
                        <Preco precoNormal="69,00" promocional="55,22" numeroParcelas="6" valorParcelas="9,20" />
                    </div>
                    <div className="col-6 botao-mobile">
                        <button type="button" onClick={handleOpen} className="Botao">Adicionar a sacola</button>
                    </div>
                </div>
                <span className="mobile-detalhes-span">Descrição</span>
                <Descricao
                    texto="Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal."
                />


            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}