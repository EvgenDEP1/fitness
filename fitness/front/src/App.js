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
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import axios from "axios";


const API_URL = "http://localhost:8000"
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            services: [],
            recordings: [],
            trainers: [],
            accessToken: this.getAccessToken(),
        };
    }

    componentDidMount() {
        this.loadState()
    }

    loadState() {
        let headers = this.getHeaders();
        // console.log('headers', headers);

        // call rest API
        axios
            .get(getResourceURL("users"), {headers: headers})
            .then((result) => {
                // console.log('users result', result)
                this.setState({
                users: result.data,

                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("services"), {headers: headers})
            .then((result) => {
                // console.log('services result', result)
                this.setState({
                services: result.data,

                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("recordings"), {headers: headers})
            .then((result) => {
                // console.log('services result', result)
                this.setState({
                recordings: result.data,

                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("trainers"), {headers: headers})
            .then((result) => {
                // console.log('services result', result)
                this.setState({
                trainers: result.data,

                })
            })
            .catch((error) => console.log(error));


    }

    login(username, password) {
        // console.log('do login', username, password);
        axios
            .post(getResourceURL("token"),
                {"username": username, "password": password})
            .then((result) => {
                let refreshToken = result.data.refresh;
                let accessToken = result.data.access;
                console.log(accessToken)

                this.saveTokens(refreshToken, accessToken)
                this.setState({accessToken: accessToken}, this.loadState)
            })
            .catch((error) => console.log(error));
    }

    logout() {
        // console.log('do logout');
        localStorage.setItem('refreshToken', null);
        localStorage.setItem('accessToken', null);
        this.clearState();
    }

    clearState() {
        this.setState({
            accessToken: null,
            users: [],
            services: [],
            recordings: [],
            trainers: [],
        })
    }

    saveTokens(refreshToken, accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
    }

    getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    isAuthenticated() {
        return this.state.accessToken !== 'null' && this.state.accessToken !== null;
    }

    getHeaders() {
        let headers = {
            'Content-Type': "application/json"
        }
        if (this.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${this.state.accessToken}`
        }

        return headers;
    }

    render() {
        // console.log('state', this.state);
        return (
            <div className="main">
                <Router>
                    <Header isAuthenticated={this.isAuthenticated()}
                            logout={() => this.logout()}/>
                    <Route exact path="/">
                        <Main/>
                    </Route>
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
                    <Route exact path="/login">
                        <LoginForm
                            login={(username, password) => this.login(username, password)}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;