import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <helmet>
        <title>CounterApp</title>
        <meta name="description" content="CounterApp" />
        <meta name="keywords" content="Home" />
      </helmet>
      <div className="counterlink">
        {" "}
        <Link to="/Counter">CounterPage</Link>
      </div>
      <h1>Welcome</h1>

      <p>
        This is a counter app that helps you increase, decrease and reset the
        value of your count.
      </p>
    </div>
  );
}

export default Home;
