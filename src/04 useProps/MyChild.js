import React, { Component } from 'react'

export default class MyChild extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {this.props.fatherName}
            </div>
        )
    }
}
