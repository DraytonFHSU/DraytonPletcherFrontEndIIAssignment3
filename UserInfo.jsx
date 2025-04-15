import React, {Component} from "react";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            luckyNumber: Math.floor(Math.random() * 10)
        };
    }
    newLuckyNumber = () => {
        this.setState({
            luckyNumber: Math.floor(Math.random() * 10)
        });
    }
    render() {
        const name = "John";
        const profession = "Technician Specialist";

        return <div>
                <p>Name: {name}! </p>
                <p>Profession: {profession}</p>
                <p>Here's a random number: {this.state.luckyNumber}</p>
                <button onClick={this.newLuckyNumber}>New Lucky Number</button>
            </div>
    }
}