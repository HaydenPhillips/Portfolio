import "../CSS/Projects/projects.css";
import React, { Fragment, useState } from "react";
import CardFull from "./CardFull";
import Modal from "./Modal";

const Cell = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = props.cellData.css;

  return (
    <Fragment>
      <div
        className="cell"
        style={{ background: bgColor }}
        onClick={() => setIsOpen(true)}
      >
        <div className="cell-content">
          <div className="name-hash">
            <div className="cell-name">{props.cellData.name}</div>
            <div className="cell-tags">{props.cellData.tags}</div>
          </div>
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <CardFull />
      </Modal>
    </Fragment>
  );
};

export default Cell;
