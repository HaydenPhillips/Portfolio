import '../../CSS/Card/card-full.css';
import React, { Fragment } from 'react';

// import CHQ from "../../assets/icons/education/CHQ.svg";
// import NUS from "../../assets/icons/education/NUS.svg";
// import VIC from "../../assets/icons/education/VIC.svg";
// import NZFT from "../../assets/icons/education/NZFT.jpg";

export default function Education({ onClose }) {
  return (
    <Fragment>
      <div className='project-card'>
        <div className='title-bar'>
          <div className='title'>Education</div>
          <div className='close'>
            <button className='button-1' onClick={onClose}>
              <div className='inner'>
                <i className='material-icons'>close</i>
              </div>
            </button>
          </div>
        </div>
        <div className='card-split'>
          <div className='left'>
            <div className='details'>Details</div>
            <div className='row'>
              <div className='small-title'>
                Victoria University of Wellington
              </div>
              <div className='text'>
                Bachelor of Science | Computer Science Major | BSc | 2016 – 2020
              </div>
            </div>
            <div className='row'>
              <div className='small-title'>
                National University of Singapore
              </div>
              <div className='text'>
                Software Engineering | Top ranked university in Asia | 2018
              </div>
            </div>
            <div className='row'>
              <div className='small-title'>
                New Zealand Institute of Fashion
              </div>
              <div className='text'>
                Diploma | Garment design | Pattern design | 2013 - 2014
              </div>
            </div>
            <div className='row'>
              <div className='small-title'>papers</div>
              <div className='text'>
                Software: Application Development, Software Development,
                Artificial Intelligence, Machine Learning, Database Systems
                Engineering, User Interface Design, Computer Graphics, Advanced
                Data Structures & Algorithms, Software Correctness, Safety
                Critical Systems, Systems Programming, Engineering Modelling &
                Design, Computer Networks, Compilers & Interpreters. Business:
                Blockchain Bootcamp, Project Management, Digital Innovation &
                Enterprise. Mathematics: Mathematical Thinking, Engineering Math
                foundations, Engineering Math with logic and stats. Physics:
                Intro to Physics, Physics for Electronics, Engineering Science.
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='image'>
              <div
                alt='education-preview'
                className='image-preview educationPreview'
              />
            </div>
            <div className='clickables'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
