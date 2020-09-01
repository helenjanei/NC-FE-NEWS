import React, { Component } from "react";
import AllArticles from "./AllArticles";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <AllArticles />
      </div>
    );
  }
}

export default Home;
