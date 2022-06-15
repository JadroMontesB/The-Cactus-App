import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const HomePage = () => {
    return (
        <div className="home">
            {/* Carrusel */}

            <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="../img/carrusel/1.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../img/carrusel/2.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../img/carrusel/3.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../img/carrusel/4.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../img/carrusel/5.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <h1>The Cactu's Coffee</h1>
                <hr />
                <h2>The Best Chilling Place</h2>

                <div class="flex-container">
                    <div class="flex-item-left-info">
                        <p>
                            Café Baristi es una empresa 100% Mexicana que nace
                            en el año 2001 en la ciudad de Tijuana, B.C.; a tan
                            solo dos años de su fundación, se nos otorga el
                            reconocimiento de la crítica especializada, al
                            obtener su Fundador y Director Fabián Sánchez el
                            primer lugar en el Concurso Nacional de Baristas
                            2003, logrando el mismo reconocimiento a través de
                            uno de sus Baristas en el año 2005 y representando a
                            México en el World Barista Championship en 2005 y
                            2006 en Italia y Suiza respectivamente.
                        </p>
                    </div>
                    <div class="flex-item-right-info">
                        <img src="./img/home-photos/coffee-1.jpg" alt="" />
                        <img src="./img/home-photos/coffee-2.jpg" alt="" />
                    </div>
                </div>

                <h1>Pet Friendly</h1>
                <hr />
                <div class="flex-container">
                    <div class="flex-item-left-pet">
                        <img src="./img/home-photos/pet-f1.jpg" alt="" />
                        <img src="./img/home-photos/pet-f2.jpg" alt="" />
                    </div>
                    <div class="flex-item-right-pet">
                        <p>
                            En los últimos años, si hay un concepto que se ha
                            ido posicionando entre los amantes de las mascotas
                            es el de Pet Friendly. Es común que diferentes
                            lugares como restaurantes, hoteles e incluso centros
                            comerciales, tengan letreros con estas palabras.
                            Pero ¿exactamente qué significa?
                        </p>
                    </div>
                </div>
            </div>

            <section class="razones">
                <h2>MENU THE CACTU'S</h2>

                <div class="fondo">
                    <div class="tarjeta">
                        <a>
                            <Link to="/menu">
                                <img
                                    class="img-icon"
                                    src="./img/icons-home/bebida-fria.png"
                                />
                                <h4>Bebidas Frías</h4>
                            </Link>
                        </a>
                    </div>

                    <div class="tarjeta">
                        <a>
                            <Link to="/menu">
                                <img
                                    class="img-icon"
                                    src="./img/icons-home/cafe-caliente.png"
                                />
                                <h4>Bebidas Calientes</h4>
                            </Link>
                        </a>
                    </div>

                    <div class="tarjeta">
                        <a>
                            <Link to="/menu">
                                <img
                                    class="img-icon"
                                    src="./img/icons-home/complementos.png"
                                />
                                <h4>Comple&shy;mentos</h4>
                            </Link>
                        </a>
                    </div>

                    <div class="tarjeta">
                        <a>
                            <Link to="/menu">
                                <img
                                    class="img-icon"
                                    src="./img/icons-home/te-verde.png"
                                />
                                <h4>Tés y Tesinas</h4>
                            </Link>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
