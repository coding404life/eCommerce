import React from "react";
import "./splash.css";

const Splash = () => {
  return (
    <div className="splash__root">
      <div className="splash__spinner">
        <div className="splash__ring"></div>
        <div className="splash__ring"></div>
        <div className="splash__ring"></div>
      </div>
      <div className="splash__title">Loading…</div>
    </div>
  );
};

export default Splash;
