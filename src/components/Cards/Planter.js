import '../../CSS/Card/card-full.css';
import React, { Fragment } from 'react';
import { Slug } from '../Animations';
import { Link } from 'react-router-dom';

export default function Planter({ onClose }) {
  return (
    <Fragment>
      <div className='project-card'>
        <div className='title-bar'>
          <div className='title'>Planter</div>
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
                  Planting trees to offset carbon emissions is not a new idea,
                  but creating an autonomous organisation to make that happen
                  is. Planter Project is a whitepaper that addresses issues and
                  explains how to solve them. Written during a summer trimester
                  at vic, the intention of this project was to explore and
                  understand the intricacies of a Decentralised Autonomous
                  Organisation (DAO), and present them in a palatable manner.
                </div>
              </div>
              <div className='row'>
                <div className='small-title'>More Info</div>
                <div className='text'>
                  Planter Project aids in environmental sustainability via
                  forestation of land. It is a platform which encourages
                  landowners, companies, and consumers to collaborate as a
                  community to offset carbon emissions.
                </div>
              </div>
              <div className='row'>
                <div className='small-title'>Tags</div>
                <div className='text'>+Blockchain +DAO</div>
              </div>
            </Slug>
          </div>
          <div className='right'>
            <div className='image'>
              <div
                alt='planter-preview'
                className='image-preview planterPreview'
              />
            </div>
            <div className='clickables'>
              <Link to={'/whitepaper'} target='_blank' activeClassName='active'>
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
