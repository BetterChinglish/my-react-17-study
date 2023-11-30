import React, { Component } from "react";


export default class Test extends Component {
    // handleClick = () => {
    //     console.log(this.refs.myinput1.value);
    // }

    myinput2 = React.createRef();
    handleClick2 = () => {
        const myinput =this.myinput2.current
        console.log(myinput.value);
    }

    render() {
        return (
            <div>
                {/* 引用 */}
                {/* <input ref="myinput1" />
                <button onClick={this.handleClick}>
                    click
                </button> */}

                <input ref={this.myinput2} />
                <button onClick={this.handleClick2}>
                    click
                </button>
                
            </div>
        )
    }
}