import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Loader from "./Loader";

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
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
    const { topics, isLoading } = this.state;

    let navClasses = "topicLinks";

    if (isLoading) return <Loader />;
    return (
      <div>
        {" "}
        <h2>Topics:</h2>
        <nav className="nav">
          <ul>
            {topics.map((topic) => {
              return (
                <li key={topic.slug} onClick={this.hideNav}>
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
