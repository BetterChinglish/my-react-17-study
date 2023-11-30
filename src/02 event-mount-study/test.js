import React, { Component } from "react";
export default class Test extends Component {

    handleClick1 = () => {
        console.log('clicked 1');
    }
    handleClick2() {
        console.log('clicked 2');
    }
    handleClick4 = () => {
        console.log('clicked 4');
    }
    
    render() {
        return (
            <div>
                {/* 事件绑定，调用函数的方式 */}
                <button onClick={this.handleClick1}>add1</button>
                <button onClick={this.handleClick2}>add2</button>
                <button onClick={()=>{console.log('clicked 3');}}>add3</button>
                <button onClick={() => { this.handleClick4() }} style={{marginBottom: '300px'}}>add4</button>
            </div>
        )
    }
}