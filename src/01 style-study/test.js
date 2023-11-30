import React, { Component } from "react";
import "./global-style-test.css";

export default class Test extends Component {

    render() {
        const myStyleObj = {
            backgroundColor: "pink",
            fontSize: '32px'
        }
        return (
            <div>
                <div style={{backgroundColor: "skyblue"}}>
                    {'行内样式'}
                </div>
                <div style={myStyleObj}>
                    {'行内样式'}
                </div>
                {/* class属性要使用className, for要使用htmlFor */}
                <div className="global-style-test">
                    {'全局样式'}
                </div>
            </div>
        )
    }
}