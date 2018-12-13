import React, { Component } from "react";
import axios from "axios";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";

class ProductDetails extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios.get(`${rootAPI}todos/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      const data = res.data.todo;
      this.setState({
        data
      });
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <span>{this.state.data !== null ? this.state.data.text : null}</span>
      </div>
    );
  }
}

export default ProductDetails;
