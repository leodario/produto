import React, { useContext } from 'react'
import '../css/Sacola.css'
import sacolinha from '../img/Vector.png'
import { BrowserRouter, Link } from 'react-router-dom'
import DataContext from '../../data/DataContext'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Botao from '../Botao'
import ProdutoCarrinho from './ProdutoCarrinho'
import Imagem from '../img/prod02.png'


function getModalStyle() {
    const top = 0;
    const right = 0;

    return {
        top: `${top}%`,
        right: `${right}%`,
        transform: `translate(-${top}%, -${right}%)`,
        width: '50%',
        height: '100vh',
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


export default function Sacola(props) {

    const context = useContext(DataContext)

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const listaProdutos = context.state.carrinho.produto

    const body = (
        <div style={modalStyle} className={classes.paper}>
            {/*Cabeçalho do carrinho*/}
            <div className="cabecalho-modal">
                <button className="botao-fechar" onClick={handleClose}>X</button>
                <h2 id="simple-modal-title" className="Titulo-carrinho">Sacola</h2>
                <span className="quantidade-carrinho">{context.state.carrinho.quantidade} itens</span>
            </div>
            {/*Produtos do carrinho*/}
            <div className="row">
                <div className="col-md-10 col-12 produtos-carrinho">
                    <div className="row">
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                        <ProdutoCarrinho titulo="Rasteira Tira Dedo" preco="49,90" quantidade="01" imagem={Imagem}/>
                    </div>
                </div>
            </div>
            {/*Rodapé do carrinho*/}
            <div className="footer-modal">
                <div className="footer-frete-gratis">
                    <p>Faltam R$ xx,xx para você <b>Ganhar frete Grátis</b></p>
                </div>
                <div className="footer-total">
                    <div className="row">
                        <div className="col-md-6 col-6">
                            <span className="total-carrinho">Total: R${context.state.carrinho.total.toFixed(2)}</span><br />
                            <p className="parcelas-carrinho">até 3x de R${context.state.carrinho.parcelado.toFixed(2)} sem juros</p>
                        </div>
                        <div className="col-md-6 col-6">
                        <button className="botao-carrinho">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="Sacola col-md-1">
            {/*Sacolinha do carrinho*/}
            <BrowserRouter>
                <Link to="/" onClick={handleOpen}>
                    <img src={sacolinha} alt="Sacola de compras" className="Sacolinha" />
                </Link>
            </BrowserRouter>
            <span className="Contador">{context.state.carrinho.quantidade}</span>
            {/*modal do carrinho*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="Carrinho"
            >
                {body}
            </Modal>
        </div>

    )
}

