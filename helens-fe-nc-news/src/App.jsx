import "./App.css";
import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./components/Home.jsx";
import Topics from "./components/Topics.jsx";
import AllArticles from "./components/AllArticles.jsx";
import ArticleById from "./components/ArticleById.jsx";
import TopicsById from "./components/TopicsById.jsx";
import ErrorHandler from "./components/ErrorHandler.jsx";
import User from "./components/User.jsx";
import Login from "./components/Login.jsx";

import "./App.css";

class App extends Component {
  state = { username: "jessjelly" };

  render() {
    const { username } = this.state;
    return (
      <div className="app-container">
        <div className="header">
          <h1>Welcome to NC News: Where News is Always New!</h1>
          <p>
            currently logged in as:{" "}
            <Link to={`/users/${username}`}>{username}</Link>{" "}
          </p>
          <p>
            <Link to={"/login"}>not you?</Link>
          </p>
        </div>

        <Router>
          <Home path="/" />
          <AllArticles path="/articles" username={username} />
          <ArticleById path="/articles/:article_id" username={username} />
          <Topics path="/topics" username={username} />
          <TopicsById path="/topics/:topic" username={username} />
          <User path="/users/:username" username={username} />
          <Login path="/login" />

          <ErrorHandler default />
        </Router>
        <div></div>
      </div>
    );
  }
}
export default App;
