import "./css/footer.css";

const Footer = () => {
    return (
        <div>
            <footer>
                <h1>The Cactu's</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, dignissimos libero. Nihil repellendus enim eaque,
                    vero natus aperiam in nemo dolorum, ratione perspiciatis,
                    iste eos quidem aspernatur? Nisi, blanditiis deleniti.
                </p>
                <div className="flex-container">
                    <div className="flex-item">
                        <h2>Menu</h2>
                        <hr />
                        <ul>
                            <a href="#">
                                <p>Bebidas Frias</p>
                            </a>
                            <a href="#">
                                <p>Bebidas Calientes</p>
                            </a>
                            <a href="#">
                                <p>Complementos</p>
                            </a>
                            <a href="#">
                                <p>Tesinas</p>
                            </a>
                        </ul>
                    </div>
                    <div className="flex-item">
                        <h2>About</h2>
                        <hr />
                        <ul>
                            <a href="#">
                                <p>About Us</p>
                            </a>
                            <a href="#">
                                <p>Location</p>
                            </a>
                            <a href="#">
                                <p>Developers</p>
                            </a>
                        </ul>
                    </div>
                </div>

                <div className="location">
                    <h1>Location</h1>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure dolore totam placeat fugit hic nemo quo aut magnam
                        minus quibusdam illo quos dolor repellendus, error non
                        eum alias voluptates voluptate?
                    </p>
                </div>

                <div className="hours">
                    <h2>HOURS</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore quidem excepturi porro illum aperiam
                        adipisci vitae error quo sint aspernatur quisquam culpa
                        omnis nobis quam, dolorem exercitationem laudantium
                        molestiae sunt?
                    </p>
                </div>

                <div className="social-networks">
                    <h2>Social Networks</h2>
                    <hr />
                    <button className="btn btn-primary btn-lg">
                        - Suscribe -
                    </button>
                    <p>facebook</p>
                    <p>instagram</p>
                    <small>
                        &copy; 2022 <b>The Cactu's</b> - All rights reserved.
                    </small>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
