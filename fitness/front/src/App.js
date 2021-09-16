import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            'service': [],
            'trainer': [],
            'user': []
        })
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                <Header />
                Fitness
                <Footer />
            </div>
        )
    }
}

export default App;