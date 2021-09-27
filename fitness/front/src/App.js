import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceList from "./components/Service";


const servicesMock = [
    {'name': "Услуга 1", 'price': "200"},
    {'name': "Услуга 2", 'price': "200"},
    {'name': "Услуга 3", 'price': "200"}
];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }

    componentDidMount() {
        this.setState({
                services: servicesMock,
            })
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                <Header />
                Fitness
                <ServiceList services={this.state.services}/>
                <Footer />
            </div>
        )
    }
}

export default App;