import "./css/home.css";

const HomePage = () => {
    return (
        <div className="container">
            <div className="carrusel">
                <ul>
                    <li>
                        <img src="./img/carrusel/close-up-of-hands-barista-make-latte-coffee-art-paint.jpg" />
                    </li>
                    <li>
                        <img src="./img/carrusel/barista-cafe-making-coffee-preparation-service-concept.jpg" />
                    </li>
                    <li>
                        <img src="./img/carrusel/close-up-of-cup-of-coffee-with-foam-flower.jpg" />
                    </li>
                    <li>
                        <img src="./img/carrusel/warmth-cafe-on-dull-day-in-oslo.jpg" />
                    </li>
                </ul>
            </div>

            <h1>The Cactu's Coffee</h1>
            <hr />

            <h4>The Best Chilling Place</h4>
            <div className="flexbox-container">
                <div className="coffe-info-text">
                    <p>
                        Café Baristi es una empresa 100% Mexicana que nace en el
                        año 2001 en la ciudad de Tijuana, B.C.; a tan solo dos
                        años de su fundación, se nos otorga el reconocimiento de
                        la crítica especializada, al obtener su Fundador y
                        Director Fabián Sánchez el primer lugar en el Concurso
                        Nacional de Baristas 2003, logrando el mismo
                        reconocimiento a través de uno de sus Baristas en el año
                        2005 y representando a México en el World Barista
                        Championship en 2005 y 2006 en Italia y Suiza
                        respectivamente.
                    </p>
                </div>
                <div className="coffe-info-img">
                    <img src="./img/home-photos/coffee-1.jpg" alt="" />
                    <img src="./img/home-photos/coffee-2.jpg" alt="" />
                </div>
            </div>

            <br />

            <div className="container-fluid">
                <div className="banner">
                    <div className="banner_d">
                        <h1>More Than a Coffee</h1>
                        <h6>Try </h6>
                    </div>
                </div>
            </div>

            <br />

            <h4>Pet Friendly</h4>
            <div className="flexbox-container">
                <div className="pet-info-img">
                    <img src="./img/home-photos/pet-f1.jpg" alt="" />
                    <img src="./img/home-photos/pet-f2.jpg" alt="" />
                </div>
                <div className="pet-info-text">
                    <p>
                        En los últimos años, si hay un concepto que se ha ido
                        posicionando entre los amantes de las mascotas es el de
                        Pet Friendly. Es común que diferentes lugares como
                        restaurantes, hoteles e incluso centros comerciales,
                        tengan letreros con estas palabras. Pero ¿exactamente
                        qué significa?
                    </p>
                </div>
            </div>

            <section class="razones">
                <h1>MENU THE CACTU'S</h1>

                <div class="fondo">
                    <div class="tarjeta">
                        <a>
                            <img
                                class="img-icon"
                                src="./img/icons-home/bebida-fria.png"
                            />
                            <h4>Cold Drinks</h4>
                        </a>
                    </div>

                    <div class="tarjeta">
                        <a>
                            <img
                                class="img-icon"
                                src="./img/icons-home/cafe-caliente.png"
                            />
                            <h4>Hot Drinks</h4>
                        </a>
                    </div>

                    <div class="tarjeta">
                        <a>
                            <img
                                class="img-icon"
                                src="./img/icons-home/complementos.png"
                            />
                            <h4>Comple&shy;ments</h4>
                        </a>
                    </div>

                    <div class="tarjeta">
                        <a>
                            <img
                                class="img-icon"
                                src="./img/icons-home/te-verde.png"
                            />
                            <h4>Tea</h4>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
