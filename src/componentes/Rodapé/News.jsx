import React from 'react'
import '../css/News.css'

export default function News() {
    return (
        <div className="row News" zIndex={20}>
            <div className="col-12">
                <h3 className="Titulo-news">Assine nossa news</h3>
            </div>
            <div className="col-12">
                <form action="#" className="News-form">
                    <div className="group">
                        <input type="text" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Nome</label>
                    </div>

                    <div className="group desktop">
                        <input type="text" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>E-mail</label>
                    </div>
                    <button type="submit" className="News-botao desktop">Enviar</button>
                    <div className="row">
                        <div className="col-8">
                            <div className="group mobile">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>E-mail</label>
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="News-botao mobile">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}