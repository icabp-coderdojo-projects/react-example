import * as React from "react";
import * as ReactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {}
    };

    this.handleEvent = this.handleEvent.bind(this); // To make 'this' available in the method
  }

  handleEvent(e) {
    let index = e.currentTarget.selectedIndex;
    let value = e.currentTarget.children[index].value;

    fetch(`http://test.moynihan.io/user/${value}`)
      .then(result => {
        return result.json();
      })
      .then(result => this.setState({ query: result }));
  }

  formatQuery() {
    if (this.state.query.stats) {
      // On line 32 is a function with a conditional in it.
      return (
        <div>
          <p>Age: {this.state.query.stats.age}</p>
          <p>Height: {this.state.query.stats.height}</p>
          <p>Is{(() => (this.state.query.stats.alive ? "" : "n't"))()} Alive</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Select alex or jerru to get from db:</h1>
        <select
          onChange={this.handleEvent}
          onClick={this.handleEvent}
          name="sel"
        >
          <option value="alex">alex</option>
          <option value="jerru">jerru</option>
        </select>
        {this.formatQuery()}
      </div>
    );
  }
}

let element = document.querySelector("#app");
ReactDom.render(<App name={"Jerry"} />, element);
