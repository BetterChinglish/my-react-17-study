import React, { Component } from 'react'

export default class ChildToFather extends Component {
    render() {
        return (<div>
                
            <button
                onClick={this.props.add}
            >
                click me
            </button>
            
        </div>)
    }
}
