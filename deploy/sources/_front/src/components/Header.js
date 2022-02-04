import {NavLink as Link} from "react-router-dom";
import React from "react";

function Header({isAuthenticated, logout}) {
    let loginLink, loginTitle, loginHandler;
    loginLink = "/login";
    loginTitle = "login";
    if (isAuthenticated) {
        loginLink = "/logout";
        loginTitle = "logout";
        loginHandler = logout;
    }
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to={"/"}
                  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                Fitness
            </Link>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to={"/users"} className="nav-link">
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/services"} className="nav-link">
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/trainers"} className="nav-link">
                        Trainers
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/recordings"} className="nav-link">
                        Recordings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={loginLink} className="nav-link" onClick={loginHandler}>
                        {loginTitle}
                    </Link>
                </li>

                {!isAuthenticated && <li className="nav-item"><Link to={"/register"} className="nav-link"
                >Заргистрироваться</Link></li>}
            </ul>
        </header>
    )
}

export default Header;
