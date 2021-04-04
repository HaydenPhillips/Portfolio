import React, { useState, Fragment } from "react";
import "../CSS/Projects/projects.css";
import Cell from "./Cell";
import Data from "./Home/Data";

const Landing = () => {
  const [data, setData] = useState(Data);

  return (
    <Fragment>
      <div className="grid">
        <div className="column-one">
          <div className="wrapper1">
            <div className="inner-col-top">
              <div className="title">projects</div>
              <Cell cellData={data[0]} />
            </div>
          </div>

          <div className="inner-col-bot">
            <Cell cellData={data[1]} />
          </div>
        </div>

        <div className="column-two">
          <div className="inner-col-top">
            <Cell cellData={data[2]} />
            <Cell cellData={data[3]} />
          </div>
          <div className="inner-col-bot">
            {/* <Cell cellData={data[5]} /> */}
          </div>
        </div>

        <div className="column-three">
          <div className="wrapper1">
            <div className="inner-col-top">
              <Cell cellData={data[4]} />
            </div>
          </div>
          <div className="inner-col-bot">
            <Cell cellData={data[5]} style={{ backgroundColour: "grey" }} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
