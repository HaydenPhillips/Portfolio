import React, { Component, Fragment } from 'react';
import lightening from '../assets/icons/lightening.svg';
import split from '../assets/icons/split.svg';
import piechart from '../assets/icons/pie-chart.svg';
import arrow from '../assets/icons/down-arrow.svg';
import account_left from '../assets/images/zap_prototype/account-45.png';
import account_right from '../assets/images/zap_prototype/account-45-right.png';
import zap_logo from '../assets/images/zap_prototype/zap_logo.png';
import Animation_in from './Mobile_prototype_animation';
import { useInView } from 'react-intersection-observer'
import '../CSS/Zap/ProjectZap.css';



const ProjectZap = () => {

  const [ref, inView] = useInView({ 
    threshold: 0,
    rootMargin: '800px 0px -400px 0px' 
  });

  return (
    <Fragment>
      <div className="grid-zap">
        <div className="grid-c3-even">
          <div className="left">
            <img src={account_left} alt='account-app' />
          </div>
          <div className="mid">
            <img src={zap_logo} alt='zap-logo' />
            <div>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="right">
            <img src={account_right} alt='account-app' />
          </div>
        </div>

        <div ref={ref} className='prototype_collection'>
          {inView ? <Animation_in /> : <div className='empty'></div>}
        </div>



        <div className='grid-c3'>
          <div className='ellipse'>
            <h2>P1</h2>
            {/* <img src={lightening} alt="lightening" /> */}
          </div>
          <div className='ellipse'>
            <h2>P2</h2>
            {/* <img src={split} alt="split-payment" /> */}
          </div>
          <div className='ellipse'>
            <h2>P3</h2>
            {/* <img src={piechart} alt="pie-chart" /> */}
          </div>
          <div className='text-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='text-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='text-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='box'>
            <img src={arrow} alt="arrow" />
          </div>
          <div className='box'>
            <img src={arrow} alt="arrow" />
          </div>
          <div className='box'>
            <img src={arrow} alt="arrow" />
          </div>

          <div className='ellipse'>
            <img src={lightening} alt="lightening" />
          </div>
          <div className='ellipse'>
            <img src={split} alt="split-payment" />
          </div>
          <div className='ellipse'>
            <img src={piechart} alt="pie-chart" />
          </div>
          <div className='text-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='text-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='text-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProjectZap


{/* <iframe
style={{ border: "0" }}
width="100%"
height="100%"
src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgIHTEsG5mj6MktvvUrMerV%2FUser-experience-flow-options%3Fnode-id%3D1228%253A0%26scaling%3Dscale-down-height&chrome=DOCUMENTATION"
>
</iframe> */}