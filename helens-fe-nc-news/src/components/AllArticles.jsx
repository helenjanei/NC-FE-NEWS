import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api.jsx";
import Loader from "./Loader";
import SortArticles from "./SortArticles.jsx";
import ErrorHandler from "./ErrorHandler";
import Nav from "./Nav";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "",
    err: "",
  };
  render() {
    const { err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;
    return (
      <div>
        <Nav />
        <SortArticles handleSort={this.handleSort} />
        <h1 className="latest-news">Latest News!</h1>

        <ul className="all-articles">
          {this.state.articles.map((article) => {
            return (
              <div key={article.article_id}>
                <div className="article-wrapper">
                  <div className="article">
                    <ArticleCard key={article.article_id} {...article} />
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  handleSort = (event) => {
    this.setState({ sort_by: event.target.value });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const topicChanged = prevProps.topic !== this.props.topic;
    const sortByChanged = prevState.sort_by !== this.state.sort_by;

    if (topicChanged || sortByChanged) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const topic = this.props.topic;
    const sort_by = this.state.sort_by;

    api
      .getArticles(topic, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false, err: "" });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}

export default AllArticles;
