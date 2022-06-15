import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <h2>The Cactu's</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quasi eligendi rem nobis deleniti labore! Quaerat officia
                    optio voluptas laboriosam in asperiores dicta reprehenderit
                    numquam suscipit alias doloremque facilis, vel inventore.
                </p>
                <div class="flex-container">
                    <div class="flex-item-left">
                        <h3>MENU</h3>
                        <hr />

                        <dt>
                            <Link to="/menu">
                                <dt>Bebidas Calientes</dt>
                            </Link>
                            <Link to="/menu">
                                <dt>Bebidas Frías</dt>
                            </Link>
                            <Link to="/menu">
                                <dt>Complementos</dt>
                            </Link>
                            <Link to="/menu">
                                <dt>Tés y Tesinas</dt>
                            </Link>
                        </dt>
                    </div>
                    <div class="flex-item-right">
                        <h3>Sobre Nosotros</h3>
                        <hr />

                        <dt>
                            <Link to="">
                                <dt>Sobre Nosotros</dt>
                            </Link>
                            <Link to="">
                                <dt>Ubicaciones</dt>
                            </Link>
                            <Link to="">
                                <dt>Desarrolladores</dt>
                            </Link>
                        </dt>
                    </div>
                </div>
                <div className="location">
                    <h3>Ubicación</h3>
                    <hr />
                    <p>1234 Cactu's Street</p>
                    <p>San Diego</p>
                    <p>Ave.La Joya Street</p>
                </div>
                <div className="hours">
                    <h3>Horarios</h3>
                    <hr />
                    <p>Lunes - Jueves: 11:00am - 7:00pm</p>
                    <p>Viernes - Sabados: 10:00am - 9:00pm</p>
                    <p>Domingos: 12:00pm - 7:00pm</p>
                </div>
                <div className="social-media">
                    <hr />

                    <div class="flex-container-sm">
                        <div class="flex-item-sm">
                            <i class="bi bi-facebook"></i>
                        </div>

                        <div class="flex-item-sm">
                            <i class="bi bi-instagram"></i>
                        </div>

                        <div class="flex-item-sm">
                            <i class="bi bi-twitter"></i>
                        </div>
                    </div>

                    <p>Copyright &copy; 2022 The Cactu's </p>
                </div>
                <br />
            </div>
        </div>
    );
};

export default Footer;
