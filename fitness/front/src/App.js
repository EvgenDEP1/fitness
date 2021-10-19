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


const API_URL = "http://localhost:8000"
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`


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
            .get(getResourceURL("users"))
            .then((result) => {
                // console.log('users result', result)
                this.setState({
                users: result.data,

                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("services"))
            .then((result) => {
                // console.log('services result', result)
                this.setState({
                services: result.data,

                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("recordings"))
            .then((result) => {
                // console.log('services result', result)
                this.setState({
                recordings: result.data,

                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("trainers"))
            .then((result) => {
                // console.log('services result', result)
                this.setState({
                trainers: result.data,

                })
            })
            .catch((error) => console.log(error));

        // this.setState({
                // users: usersMock,
                // services: servicesMock,
                // recordings: recordingsMock,
                // trainers: trainersMock
            // })
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