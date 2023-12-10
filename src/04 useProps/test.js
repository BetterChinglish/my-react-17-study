import React, { Component } from "react";

import MyChild from './MyChild';
import ChildToFather from "./ChildToFather";

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'father name',
            num: 0
        }
    }
    add = () => {
        this.setState({
            num: this.state.num + 1,
        })
    }
    render() {
        return (
            <div>
                hello world {this.state.num}
                {/* 父传子, 使用属性传入组件即可 */}
                <MyChild fatherName={this.state.name} />
                {/* 子传父，触发函数 */}
                <ChildToFather add={this.add} />
            </div>
        )
    }
}