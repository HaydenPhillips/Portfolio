import '../../CSS/Card/card-full.css';
import React, { Fragment } from 'react';
import { Slug } from '../Animations.js';
import HadesAnimation from '../Projects/HadesAnimation';

export default function Hades({ onClose }) {
  return (
    <Fragment>
      <div className='project-card'>
        <div className='title-bar'>
          <div className='title'>Hades</div>
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
            <Slug delay={400}>
              <div className='details'>Details</div>
              <div className='row'>
                <div className='small-title'>Overview</div>
                <div className='text'>
                  I was playing around on Xd and created the svgs for no
                  particular reason other than 'it looks cool'. I had no clue
                  what to do with them so I thought i'd mess around with
                  react-spring (an animation library).
                </div>
              </div>
              <div className='row'>
                <div className='small-title'>Tags</div>
                <div className='text'>+pointless +animation +react-spring</div>
              </div>
            </Slug>
          </div>
          <div className='right'>
            <HadesAnimation></HadesAnimation>
          </div>
        </div>
      </div>
    </Fragment>
  );
}