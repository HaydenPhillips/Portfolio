import "../../CSS/Card/card-full.css";
import React, { Fragment } from "react";

export default function Action({ onClose }) {
  return (
    <Fragment>
      <div className="project-card">
        <div className="title-bar">
          <div className="title">Action</div>
          <div className="close">
            <button className="button-1" onClick={onClose}>
              <div className="inner">
                <i className="material-icons">close</i>
              </div>
            </button>
          </div>
        </div>
        <div className="card-split">
          <div className="left">
            <div className="details">Details</div>
            {/* <div className="corner-left"></div> */}
            {/* <div className="corner-right"></div> */}
            <div className="row">
              <div className="small-title">Overview</div>
              <div className="text">
                This is one of my first websites I built using HTML, CSS, JS,
                and a little PHP. It is a single page website with elegant
                navigation accompanied with basic animation and parallax
                effects.
              </div>
            </div>
            <div className="row">
              <div className="small-title">Client info</div>
              <div className="text">
                This client is a budding company in the auto mechanics industry,
                specialising in motorsports racing.
              </div>
            </div>
            <div className="row">
              <div className="small-title">Tags</div>
              <div className="text">
                +product-design +graphic-design +clothing +photography
                +videography
              </div>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <div
                alt="action-preview"
                className="image-preview actionPreview"
              />
            </div>
            <div className="clickables">
              <button className="button-1">
                <div className="inner">
                  <div className="title">view project</div>
                </div>
              </button>
              <button className="button-1">
                <div className="inner">
                  <div className="title">view code</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
