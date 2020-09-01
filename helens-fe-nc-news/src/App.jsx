import "./App.css";
import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./components/Home.jsx";

import AllArticles from "./components/AllArticles.jsx";
import ArticleById from "./components/ArticleById.jsx";
import ErrorHandler from "./components/ErrorHandler.jsx";
import "./App.css";

class App extends Component {
  state = { username: "jessjelly" };
  render() {
    const { username } = this.state;
    return (
      <div className="app-container">
        <div className="header">
          <h3 username={username}>{username}</h3>
          <h1>Welcome to NC News: Where News is Always New!</h1>
        </div>

        <Router>
          <Home path="/" />
          <AllArticles path="/articles" username={username} />
          <ArticleById path="/articles/:article_id" username={username} />

          <ErrorHandler default />
        </Router>
        <div></div>
      </div>
    );
  }
}
export default App;
