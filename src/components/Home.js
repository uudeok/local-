import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="title-1">뭐 먹을지 고민될땐?</div>
        <div className="title-2">local 맛집</div>
        <Link to="/main">
          <button className="open">들어가기</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
