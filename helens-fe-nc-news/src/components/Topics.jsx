import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Loader from "./Loader";
import Nav from "./Nav";
import ErrorHandler from "./ErrorHandler";

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  getTopics() {
    return api.getTopics();
  }

  render() {
    const { topics, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;
    return (
      <div>
        <Nav />
        <h2>Topics:</h2>
        <nav className="nav">
          <ul>
            {topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <Link to={`/topics/${topic.slug}`} className="nav-sub-topics">
                    <p>{topic.slug}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopicList;
