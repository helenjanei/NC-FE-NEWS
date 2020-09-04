import React, { Component, Link } from "react";

import Nav from "./Nav";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";

class Home extends Component {
  state = {
    isLoading: true,

    err: "",
  };
  render() {
    const { err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    return (
      <div>
        <Nav />
        <div className="responsive">
          <div className="gallery">
            <img
              className="img-cat-burglar"
              src={require("../Images/IMG_0081.jpeg")}
              alt="Cat Burglar"
              width="500"
              height="600"
            />

            <div className="image-description">
              Capturing the news as it happens
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
