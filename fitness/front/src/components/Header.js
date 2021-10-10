import {NavLink as Link} from "react-router-dom";

const Header = () => {
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
                        </ul>
                    </header>
    )
}

export default Header;
