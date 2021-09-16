import React from 'react';


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
        return(
            <div>
                Fitness
            </div>
        )
    }
}

export default App;