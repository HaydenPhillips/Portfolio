import '../../CSS/Card/card-full.css';
import React, { Fragment, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Slug } from '../Animations';
import github from '../../assets/icons/contact/github.svg';
import linkedin from '../../assets/icons/contact/linkedin.png';
import { ReactComponent as CopyToClip } from '../../assets/icons/copy-to-clip.svg';

export default function About({ onClose }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(true);
  };

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(true);
  }

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
            <Slug delay={400}>
              <div className='details'>Details</div>
              <div className='row'>
                <div className='small-title'>Hayden Phillips</div>
                <div className='small-title'>Software Developer & Designer</div>
                <div className='small-title'>Age 27</div>
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
                {/* <div className='text'>
                  Ambitiously creative - Software developer - Ui & Ux designer -
                  Computer Science Major - I build web-apps, design & make
                  clothing, play chess, take photos, shoot hoops, repetitively
                  lift heavy objects, ponder life, listen to podcasts,
                  audiobooks, and music. I am interested in frontend development
                  because writing code that involves visual aspects is the beez
                  kneez. I enjoy problem-solving and always try to listen to,
                  understand, and learn from, the people around me.
                </div> */}
              </div>
            </Slug>
          </div>
          <div className='right'>
            <div className='image'>
              <div alt='about-preview' className='image-preview aboutPreview' />
            </div>
            <div className='clickables' onClick={toggleClass}>
              <button className='button-1'>
                {isActive ? (
                  <div className='inner'>
                    <Slug>
                      <div className='email'>
                        <div>hayden.colony@gmail.com</div>
                      </div>
                    </Slug>
                  </div>
                ) : (
                  <Slug>
                    <div className='inner'>
                      <div className='title'>Contact</div>
                    </div>
                  </Slug>
                )}
              </button>

              {isActive ? (
                <Slug>
                  <button
                    className='button-1'
                    style={{ width: '50px' }}
                    onClick={copyToClipboard}
                  >
                    <div className='inner'>
                      <textarea
                        ref={textAreaRef}
                        value='hayden.colony@gmail.com'
                      />
                      <CopyToClip
                        className='copy-to-clip'
                        fill={copySuccess ? 'green' : 'black'}
                      />
                    </div>
                  </button>
                </Slug>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
