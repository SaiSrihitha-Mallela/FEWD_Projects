// import React from 'react'

// function MethodAsProps(props) {
//   return (
//     <>
//     <div>MethodAsProps</div>
//     <button onClick={props.greet}>Click!</button>
//     </>

//   )
// }

// export default MethodAsProps;
import React, { Component } from 'react'

export default class MethodAsProps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div>MethodAsProps</div>
                <button onClick={this.props.greet}>Click!</button>
            </>
        )
    }
}