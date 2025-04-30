import React from 'react';

class Bind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        // Binding the function to 'this'
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>Click Me</button>
            </div>
        );
    }
}

export default Bind;