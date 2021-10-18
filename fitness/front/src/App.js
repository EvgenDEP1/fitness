// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, NavLink as Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/User";
import ServiceList from "./components/ServiceList";
import ServiceDetail from "./components/ServiceDetail";
import RecordingList from "./components/RecordingList";
import RecordingDetail from "./components/RecordingDetail";
import TrainerList from "./components/TrainerList";
import axios from "axios";


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

const recordingsMock = [
    {
    "id": 1,
    "created": "2021-10-11T05:33:54.795389Z",
    "updated": "2021-10-11T05:33:54.863361Z",
    "service": 1,
    "trainer": [
      1
    ],
    "user": [
      1,
      2,
      3
    ]
  },
  {
    "id": 2,
    "created": "2021-10-11T05:33:54.795389Z",
    "updated": "2021-10-11T05:33:54.863361Z",
    "service": 2,
    "trainer": [
      2,
      3,
      4
    ],
    "user": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": 3,
    "created": "2021-10-11T05:33:54.795389Z",
    "updated": "2021-10-11T05:33:54.863361Z",
    "service": 3,
    "trainer": [
      5
    ],
    "user": [
      6
    ]
  },
  {
    "id": 4,
    "created": "2021-10-11T05:33:54.795389Z",
    "updated": "2021-10-11T05:33:54.863361Z",
    "service": 4,
    "trainer": [
      2
    ],
    "user": [
      3,
      7
    ]
  },
  {
    "id": 5,
    "created": "2021-10-11T05:33:54.795389Z",
    "updated": "2021-10-11T05:33:54.863361Z",
    "service": 5,
    "trainer": [
      4
    ],
    "user": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  }
];

const trainersMock = [
    {
    "id": 1,
    "name": "Имя 1",
    "surname": "Фамилия 1",
    "patronymic": "Отчество 1",
    "gender": "",
    "address": "адрес",
    "phone_number": ""
  },
  {
    "id": 2,
    "name": "Имя 2",
    "surname": "Фамилия 2",
    "patronymic": "Отчество 2",
    "gender": "",
    "address": "адрес",
    "phone_number": ""
  },
  {
    "id": 3,
    "name": "Имя 3",
    "surname": "Фамилия 3",
    "patronymic": "Отчество 3",
    "gender": "",
    "address": "адрес",
    "phone_number": ""
  },
  {
    "id": 4,
    "name": "Имя 4",
    "surname": "Фамилия 4",
    "patronymic": "Отчество 4",
    "gender": "",
    "address": "адрес",
    "phone_number": ""
  },
  {
    "id": 5,
    "name": "Имя 5",
    "surname": "Фамилия 5",
    "patronymic": "Отчество 5",
    "gender": "",
    "address": "адрес",
    "phone_number": "9046587416"
  },
];



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            services: [],
            recordings: [],
            trainers: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8000/api/users/")
            .then((result) => {
                console.log('result', result)
            })
            .catch((error) => console.log(error));

        this.setState({
                users: usersMock,
                services: servicesMock,
                recordings: recordingsMock,
                trainers: trainersMock
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
                    <Route exact path="/services/detail/:id">
                        <ServiceDetail services={this.state.services}/>

                    </Route>
                    <Route exact path="/trainers">
                        <TrainerList trainers={this.state.trainers}/>
                    </Route>
                    <Route exact path="/recordings">
                        <RecordingList recordings={this.state.recordings}/>
                    </Route>
                    <Route exact path="/recordings/detail/:id">
                        <RecordingDetail recordings={this.state.recordings}
                                        users={this.state.users}
                                        services={this.state.services}
                                        trainers={this.state.trainers}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;