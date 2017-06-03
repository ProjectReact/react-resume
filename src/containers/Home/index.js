import React, { Component } from "react";
import "./index.css";

const Home = ( props ) => (
  <div className="home">
    <div className="avatar-img">
      <img src="https://avatars3.githubusercontent.com/u/26476759?v=3&s=460" alt="" className="avatar" />
    </div>
    <div className="info">
      <p className="name">Alan</p>
      <p className="profession">呈琛前端生态圈</p>
      <p className="desc">一个前端爱好者！</p>
    </div>
  </div>
)
export default Home;
