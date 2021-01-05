import React from 'react'
import Slider from "react-slick"
import "../css/SliderRelacionados.css"
import Imagem from '../img/prod02.png'
import SlideIndividual from './SlideIndividual'
import { BrowserRouter } from 'react-router-dom'

export default function SliderRelacionados() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    }

    var settingsMobile = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
    }
    return (
        <div className="col-12 SliderRelacionados">
            <div className="desktop">
            <BrowserRouter>
                <Slider {...settings}>
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                </Slider>
            </BrowserRouter>
            </div>
            <div className="mobile">
            <BrowserRouter>
                <Slider {...settingsMobile}>
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                    <SlideIndividual preco="R$204,90" imagem={Imagem} />
                </Slider>
            </BrowserRouter>
            </div>
            
        </div>
    )
}