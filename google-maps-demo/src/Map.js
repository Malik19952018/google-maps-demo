import React, {Component} from 'react';
import axios from 'axios';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            broj: 1,
            body: 'Nema bodija'
        }
    }

    componentDidMount() {
        console.log("did mount");
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
            this.setState({body: res.data.body})
            console.log(res);
        }).catch(err => {
            console.error("something happend", err);
        })
    }

    onButtonClick = (e, param = "param") => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
            this.setState({body: res.data.body})
            console.log(res);
        }).catch(err => {
            console.error("something happend", err);
        })
        console.log("lijep kod", e);
        console.log("param", param);
    } 

    render() {
        console.log("render");
        const h1Style = {color: 'red'};
        return (
            <div>
        <h1 style={h1Style}>{this.state.body}</h1>
        <button onClick={(e) => this.onButtonClick(e, "drugi param")}> DUGME</button>
        <input type="text" onChange={e => {
            console.log(e.target.value);
        }}/>
            </div>
    );
        
    }
}

export class AnotherComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        
    }
    render() {
        return(<div>
            <h3> Ovo je h3 </h3>
            <p> Ovo je paragraf </p>
            <p> {this.props.testProp} </p>

             </div>);
    }
}