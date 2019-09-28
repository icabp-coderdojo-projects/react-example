import * as React from "react";
import * as ReactDom from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {}
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/user/alex")
            .then((result) => { return result.json() })
            .then(result => this.setState({query: result}))
    }

    render() {
        return (
            <div>
                <h1>{this.state.query.name}</h1>
                <p>TTHHH</p>
            </div>
        )
    }
}

let element = document.querySelector("#app");
ReactDom.render(<App name={"Jerry"} />, element);