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
    "username": "user1",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 2,
    "username": "user2",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 3,
    "username": "user3",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 4,
    "username": "user4",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 5,
    "username": "user5",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 6,
    "username": "user6",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 7,
    "username": "user7",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 8,
    "username": "user8",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 9,
    "username": "user9",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 10,
    "username": "user10",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 11,
    "username": "kpk",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  }
];

const servicesMock = [
    {
    "id": 1,
    "name": "Услуга 1",
    "price": "200.00",
    "desc": "тест",
    "status": false
  },
  {
    "id": 2,
    "name": "Услуга 2",
    "price": "200.00",
    "desc": "тест",
    "status": false
  },
  {
    "id": 3,
    "name": "Услуга 3",
    "price": "200.00",
    "desc": "тест",
    "status": false
  },
  {
    "id": 4,
    "name": "Услуга 4",
    "price": "200.00",
    "desc": "тест",
    "status": false
  },
  {
    "id": 5,
    "name": "Услуга 5",
    "price": "200.00",
    "desc": "тест",
    "status": false
  }
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