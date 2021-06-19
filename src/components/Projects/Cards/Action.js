import '../../../CSS/Card/card-full.css';
import React, { Fragment } from 'react';
import { Slug } from '../../Animations';
import { Link } from 'react-router-dom';

export default function Action({ onClose }) {
  return (
    <Fragment>
      <div className='project-card'>
        <div className='title-bar'>
          <div className='title'>Action</div>
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
                  This is one of my first websites I built using HTML, CSS, JS,
                  and a little PHP. It is a single page website with elegant
                  navigation accompanied with basic animation and parallax
                  effects.
                </div>
              </div>
              <div className='row'>
                <div className='small-title'>Client info</div>
                <div className='text'>
                  This client is a budding company in the auto mechanics
                  industry, specialising in motorsports racing.
                </div>
              </div>
              <div className='row'>
                <div className='small-title'>Tags</div>
                <div className='text'>+web-development +HTML +CSS +JS +PHP</div>
              </div>
            </Slug>
          </div>
          <div className='right'>
            <div className='image'>
              <div
                alt='action-preview'
                className='image-preview actionPreview'
              />
            </div>
            <div className='clickables'>
              <Link
                to={{ pathname: 'https://actionmotorsport.co.nz' }}
                target='_blank'
                activeClassName='active'
              >
                <button className='button-1'>
                  <div className='inner'>
                    <div className='title'>view project</div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
