import React, { useState, useEffect } from 'react'
import '../css/ImagemProduto.css'
import imagem from '../img/prod02.png'
import Slider from "react-slick"

export default function ImagemProduto() {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    })

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        asNavFor: '.slider-nav',
        arrows: false,
        fade: true
    }

    var settingsThumbs = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        swipeToSlide: true,
        focusOnSelect: true,
        sliderPerRow: 1,
        vertical: true, 
        arrows: false,
        focusOnSelect: true
    }

    var settingsMobile = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    }

    const slidesData = [
        {
            id: 1,
            imagem: imagem
        }, {
            id: 2,
            imagem: imagem
        }, {
            id: 3,
            imagem: imagem
        }, {
            id: 4,
            imagem: imagem
        }, {
            id: 5,
            imagem: imagem
        }, {
            id: 6,
            imagem: imagem
        },
    ]
    return (
        <div className="ImagemProduto col-md-6 col-12">
            <div className="row imagem-produto-desktop">
                <div className="slider-wrapper">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="thumbnail-slider-wrap">
                                <Slider
                                    {...settingsThumbs}
                                    asNavFor={nav1}
                                    ref={slider => (setSlider2(slider))}>

                                    {slidesData.map((slide) =>

                                        <div className="slick-slide" key={slide.id}>
                                            <img className="slick-slide-image" src={slide.imagem} />
                                        </div>

                                    )}

                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <Slider {...settings} asNavFor={nav2}
                                ref={slider => (setSlider1(slider))}>
                                {slidesData.map((slide) =>
                                    <div className="slick-slide" key={slide.id}>
                                        <img className="slick-slide-image" src={slide.imagem} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row imagem-produto-mobile">
                <div className="slider-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settingsMobile}>
                                {slidesData.map((slide) =>
                                    <div className="slick-slide" key={slide.id}>
                                        <img className="slick-slide-image" src={slide.imagem} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    )
}