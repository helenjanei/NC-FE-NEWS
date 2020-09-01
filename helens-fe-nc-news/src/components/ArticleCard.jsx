import React from "react";
import { Link } from "@reach/router";
import "../App.css";

const ArticleCard = (props) => {
  const {
    author,
    title,
    article_id,
    topic,
    created_at,
    votes,
    comment_count,
  } = props;
  return (
    <div className="article-container">
      <h2 className="topic-header">
        {topic.charAt(0).toUpperCase() + topic.slice(1)}
      </h2>
      <h2 className="title">{title}</h2>
      <p>
        {" "}
        by {author} {""}
        {new Date(created_at).toLocaleString()}
      </p>
      {votes} votes
      <p> ⚘ {comment_count} comments</p>
      <Link to={`/articles/${article_id}`} className="readmore">
        Read more
      </Link>
    </div>
  );
};

export default ArticleCard;
