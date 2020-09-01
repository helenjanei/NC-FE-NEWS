import React, { Component } from "react";
import Loader from "./Loader";

import * as api from "../utils/api.jsx";
import ErrorHandler from "./ErrorHandler";

class ArticleById extends Component {
  state = {
    articleById: {},
    isLoading: true,
    err: "",
  };

  render() {
    const {
      title,
      author,
      body,
      topic,

      comment_count,
      created_at,
    } = this.state.articleById;

    const { err, isLoading } = this.state;

    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    return (
      <article className="article-by-id">
        <h2 className="topic-header">
          {" "}
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </h2>
        <h2 className="title">{title}</h2>
        <p>
          by {author} {new Date(created_at).toLocaleString()}
        </p>
        <p>{body}</p> <p>🗣{comment_count} comments</p>
      </article>
    );
  }

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById = () => {
    const article_id = this.props.article_id;
    api
      .getArticleById(article_id)
      .then((articleById) => {
        this.setState({ articleById, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}
export default ArticleById;
