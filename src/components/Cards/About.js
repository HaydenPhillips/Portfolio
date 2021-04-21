import '../../CSS/Card/card-full.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import github from '../../assets/icons/contact/github.svg';
import linkedin from '../../assets/icons/contact/linkedin.png';

export default function About({ onClose }) {
  return (
    <Fragment>
      <div className='project-card'>
        <div className='title-bar'>
          <div className='title'>About</div>
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
              <div className='small-title'>Hayden Phillips</div>
              <div className='small-title'>Software Developer & Designer</div>
              <div className='small-title'>
                New Zealand Institute of Fashion
              </div>
            </div>
            <div className='row'>
              <div className='icons'>
                <Link
                  to={{ pathname: 'https://github.com/HaydenPhillips' }}
                  target='_blank'
                >
                  <img className='icon' src={github} alt='github' />
                </Link>

                <Link
                  to={{
                    pathname:
                      'https://www.linkedin.com/in/hayden-phillips-86a466197/',
                  }}
                  target='_blank'
                >
                  <img className='icon' src={linkedin} alt='linkedin' />
                </Link>
              </div>
            </div>

            <div className='row'>
              <div className='small-title'>Me in One Minute</div>
              <div className='text'>
                Ambitiously creative - Software developer - Ui & Ux designer -
                Computer Science Major - I build web-apps, design & make
                clothing, play chess, take photos, shoot hoops, repetitively
                lift heavy objects, ponder life, listen to podcasts, audiobooks,
                and music. I am interested in frontend development because
                writing code that involves visual aspects is the beez kneez. I
                enjoy problem-solving and always try to listen to, understand,
                and learn from, the people around me.
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='image'>
              <div alt='about-preview' className='image-preview aboutPreview' />
            </div>
            <div className='clickables'>
              <button className='button-1'>
                <div className='inner'>
                  <div className='title'>Contact</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
