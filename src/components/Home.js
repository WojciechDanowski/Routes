import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    );
  }
}
export default Home;
