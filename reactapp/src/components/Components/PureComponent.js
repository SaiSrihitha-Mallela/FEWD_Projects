// PureComponentExample.jsx
import React, { PureComponent } from 'react';

class PureComponentExample extends PureComponent {
    render() {
        console.log('Rendering Pure Component');
        return <h2>Pure Component: {this.props.name}</h2>;
    }
}

export default PureComponentExample;
