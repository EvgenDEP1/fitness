// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, NavLink as Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/User";
import ServiceList from "./components/Service";


const usersMock = [
    {
        "id": 1,
        "username": "kpk",
        "email": "",
        "first_name": "",
        "last_name": "",
        "gender": "",
        "date_birth": null
    },
    {
        "id": 2,
        "username": "user1",
        "email": "",
        "first_name": "",
        "last_name": "",
        "gender": "",
        "date_birth": null
    }
];

const servicesMock = [
    {'name': "Услуга 1", 'price': "200"},
    {'name': "Услуга 2", 'price': "200"},
    {'name': "Услуга 3", 'price': "200"}
];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            services: []
        };
    }

    componentDidMount() {
        this.setState({
                users: usersMock,
                services: servicesMock,
            })
    }

    render() {
        // console.log('state', this.state);
        return (
            <div className="main">
                <Router>
                    <Header/>
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

                    <Route exact path="/">
                        <Header/>
                    </Route>
                    <Route exact path="/users">
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path="/services">
                        <ServiceList services={this.state.services}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;