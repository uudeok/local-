import "./App.css";
import Home from "./components/Home";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
