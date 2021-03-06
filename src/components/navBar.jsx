import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css";

const NavBar = () => {
    return (
        <div className="navBar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./">
                        <img src="" alt="" />
                        The Cactu's
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/menu"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/online_shop"
                                >
                                    Tienda Online
                                </Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="./login.html"
                                >
                                    <i class="bi bi-person"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="./carrito.html"
                                >
                                    <i class="bi bi-cart3"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
