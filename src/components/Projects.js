import React, { Fragment } from "react";
import "../CSS/Projects/projects.css";

const Landing = () => {
  // const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div className="grid">
        <div className="col">
          <div className="title">PROJECTS</div>
          <div className="card-small" style={{ height: "100px" }}></div>
          <div className="card-small" style={{ height: "100px" }}></div>
        </div>
        <div className="col">
          <div className="card-small"></div>
          <div className="card-small"></div>
        </div>
        <div className="col">
          <div className="card-small"></div>
          <div className="card-small"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
