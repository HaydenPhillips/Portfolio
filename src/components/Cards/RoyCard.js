import "../../CSS/Card/card-full.css";
import React, { Fragment } from "react";
// import RoyCard from "./CardFull";

const RoyCard = () => {
  return (
    <Fragment>
      <div className="project-card">
        <div className="title-bar">
          <div className="title">Project Name</div>
        </div>
        <div className="card-split">
          <div className="left">
            <div className="details"></div>
          </div>
          <div className="right">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoyCard;
