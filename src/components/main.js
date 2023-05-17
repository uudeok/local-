import "../css/Main.css";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Image from "./Image";

const Main = () => {
  return (
    <div className="layout">
      <div className="header">
        <div className="title"> 파주맛집 </div>
        <div className="category">
          <nav>
            <Link to="/pageone" className="pageone">
              한식
            </Link>
            <Link to="/pagetwo" className="pagetwo">
              양식
            </Link>
            <Link to="/pagethree" className="pagethree">
              중식
            </Link>
          </nav>
          <Routes>
            <Route path="/pageone" element={<Pageone />} />
            <Route path="/pagetwo" element={<Pagetwo />} />
          </Routes>
        </div>
      </div>
      <Image />
    </div>
  );
};

export default Main;
