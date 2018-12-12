import React, { Component } from "react";
import "./App.css";

import axios from "axios";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get(`${rootAPI}todos`).then(res => {
      const todos = res.data.todos;
      this.setState({
        todos
      });
    });
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        {this.state.todos.length > 0
          ? this.state.todos.map((data, i) => <div key={i}>{data.text}</div>)
          : null}
      </div>
      // <div>asd</div>
    );
  }
}

export default App;
