import React, { Component } from 'react'
import { config } from 'react-spring/renderprops'
import Grid from './Grid'
import { Slug, Fade, FadeUp } from './Primitives'
import data from './Data'
import '../../CSS/Home/Home.css'
import 'antd/dist/antd.css'
import { CloseOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
// import ProjectRoy from '../ProjectRoy'
// import { render } from 'react-dom'



export default class Home extends Component {
  state = { data }
  render() {
    return (
      <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={this.state.data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Number of columns
        columns={3}
        // Space between elements
        margin={30}
        // Removes the possibility to scroll away from a maximized element
        lockScroll={true}
        // Delay when active elements (blown up) are minimized again
        closeDelay={0}
        // Regular react-spring configs
        config={config.slow}>

        {(data, active, toggle, open) => (
          <Cell {...data} active={active} toggle={toggle} open={open} />
        )}
      </Grid>
    )
  }
}

class Cell extends Component {
  render() {
    const { toggle, name, tags, css, active, image, area, componentName } = this.props
    // const transparency

    return (
      <div className={active ? 'cell crop' : 'cell'}
        style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
        onClick={!active ? toggle : undefined} >

        <FadeUp show={active} delay={active ? 700 : 0}>
          <div className={'full-cell-content opacity no-scroll ' + area}>
            <DynamicComponent componentName={componentName} toggle={toggle} image={image} />
          </div>
        </FadeUp>

        <FadeUp show={!active} delay={active ? 0 : 900}>
          <div className="cell-content">
            <div className='name-hash'>
              <div className='cell-name'>{name}</div>
              <div className='cell-tags' id='ct'>{tags}</div>
            </div>
          </div>
        </FadeUp>
      </div>
    )
  }
}


export class DynamicComponent extends Component {
  render() {
    const { toggle, image, componentName } = this.props
    if (componentName === 'Roy') return <Roy toggle={toggle} image={image} />
    else if (componentName === 'About') return <About toggle={toggle} image={image} />
    else if (componentName === 'Zap') return <Zap toggle={toggle} image={image} />
    else if (componentName === 'Education') return <Education toggle={toggle} image={image} />
    else if (componentName === 'AM') return <ActionMotorsport toggle={toggle} image={image} />
    // else if (componentName === 'Random') return <Random toggle={toggle} image={image} />
    // else if (componentName === 'Contact') return <Contact toggle={toggle} image={image} />
    // else if (componentName === 'Gallery') return <Gallery toggle={toggle} image={image} />
  }
}

export class Roy extends Component {
  render() {
    const { toggle, image } = this.props
    return (
      <Slug delay={400}>
        <div className='name'>Roy Apparel</div>
        <div className="close">
          <CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
        </div>

        <div className='description'>Menswear brand based in Wellington New Zealand.</div>

        <div className='section1'>
          <div className='title-small'>Director & Designer</div>
          <div className='description'>
            Roy Apparel was a company that I operated between 2014 & 2017.
            Good times were had, many mistakes made, many lessons learnt. Some cool stuff was made in the process.
            Take a look for yourself.
            {/* Manufacturing locally meant that my collections were small, but quility was ensured. */}
            {/* I developed from traditional ways of garment construction, yet found myself re-engineering the way garments are put together. */}
            {/* My designs were purposeful and refined.<br /> */}
          </div>
        </div>
        <div className='section2'>
          <div className='title-small'>Roles & Responsibilities</div>
          <div className='description'>
            - Design and manufacture clothing from concept to final product<br />
            - Produce digital content e.g. product photography, videography, animations, lookbooks<br />
            - Coordinated all activities required to bring the product to market<br />
            - Generated sales through online and boutique clothing stores across the nation.
          </div>
        </div>
        <div className='tag'>#product design #clothing #photography #videography #packaging</div>

        <Link to={'/projectroy'} target='_blank' className='link' style={{ cursor: 'pointer' }}>
          View Project
      </Link>

      </Slug>
    )
  }
}

export class About extends Component {
  render() {
    const { toggle } = this.props
    return (
      <Slug delay={600}>
        <div className='name'>About Me</div>
        <div className="close">
          <CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
        </div>
        <div className='section1'>
          <div className='title-small'>Hayden Phillips</div>
          <div className='title-small'>Wellington based</div>
          <div className='title-small'>26</div>
        </div>
        <div className='section2' style={{ alignSelf: 'flex-end' }}>
          <div className='title-small'>Interests</div>
          <div className='description'>
            I am ambitiously creative.<br />
            I like to code, particularly with visual aspects.<br />
            I like to design interfaces.<br />
            Making clothes.<br />
            I like to socialise in small groups, the smaller better.<br />
            I like to ponder.<br />
            Business strategy.<br />
            1v1 games: chess, ping pong, squash, Tekken.<br />
            Taking photos with a slow shutter speed.<br />
          </div>
        </div>
        <div className='tag'>#Interests #Profile #Location</div>
        {/* <img className='image' src={image} /> */}
      </Slug>
    )
  }
}

export class Zap extends Component {
  render() {
    const { toggle, image } = this.props
    return (
      <Slug delay={600}>

        <div className='name'>Zap</div>
        <div className="close">
          <CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
        </div>
        <div className='description'>
          Zap is a way to send and receive payments seamlessly.
          It allows the ability to split payments between friends, and eliminates delay.
        </div>
        <div className='section1'>
          <div className='title-small'>Roles & Responsibilities</div>
          <div className='description'>
            A mobile application prototype built by myself and two others, Liam Malone and Chris Corbett, in 2020.
            Leveraging similar services like Venmo and The-Cash-App,
            I was able to refined and develope from pre-existing apps to create an effective Ui.
            This prototype was pieced together using figma.
            The presentation displayed on this website was done so using React. --Work in progress.--
          </div>
        </div>
        <div className='tag'>#Prototyping #Ui #Ux #Mobile-appication</div>

        <Link to={'/projectzap'} target='_blank' className='link' style={{ cursor: 'pointer' }}>
          View Project
        </Link>
        {/* <img className='image' src={this.props.image} /> */}
      </Slug>
    )
  }
}

export class Education extends Component {
  render() {
    const { toggle, image } = this.props
    const VIC = image[0]
    const NUS = image[1]
    const CHQ = image[2]
    const NZFT = image[3]

    return (
      <Slug delay={600}>
        <div className='name'>Education</div>
        <div className="close">
          <CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
        </div>
        <div className='VIC' >
          <img className='image' style={{ width: '200px', height: 'auto', paddingBottom: '10px' }} src={VIC} />
          <div className='title-small'>Victoria University of Wellington</div>
          <div className='description'>
            BSc - Bachelor of Science<br />
            Majoring in Computer Science<br />
            2017 – 2020.<br />
          </div>
        </div>
        <div className='CHQ' >
          <img className='image' style={{ width: '100px', height: 'auto', paddingBottom: '10px' }} src={CHQ} />
          <div className='title-small'>Venture Up | Startup Accelerator</div>
          <div className='description'>
            CEO of PierToPeer | Feb18 - Mar18<br />
            Directed a team of five that built an online freight sharing platform,
            connecting senders and transporters to utilise free space within their vehicles.
          </div>
        </div>
        <div className='NUS' >
          <img className='image' src={NUS} style={{ width: '100px', height: 'auto', paddingBottom: '10px' }} />
          <div className='title-small'>National University of Singapore</div>
          <div className='description'>
            Software Engineering<br />
            Top ranked university in Asia.<br />
            2018 – 2018
          </div>
        </div>
        <div className='NZFT' >
          <img className='image' style={{ width: '100px', height: 'auto', paddingBottom: '20px' }} src={NZFT} />
          <div className='title-small'>New Zealand Institute of Fashion</div>
          <div className='description'>
            Diploma | 2013 - 2014<br />
            I discovered my passion for design from a young age and found an outlet through clothing design.
          </div>
        </div >
        <div className='course'>
          <div className='title-small'>Courses</div>
          <div className='description'>
            <b>Software:</b> Application Development, Software Development, Artificial Intelligence,
            Machine Learning, Database Systems Engineering, User Interface Design, Computer Graphics,
            Advanced Data Structures & Algorithms, Software Correctness, Safety Critical Systems,
            Systems Programming, Engineering Modelling & Design, Computer Networks, Compilers & Interpreters.<br />
            <b>Business:</b> Blockchain Bootcamp, Project Management, Digital Innovation & Enterprise.<br />
            <b>Mathematics:</b> Mathematical Thinking, Engineering Math foundations, Engineering Math with logic and stats.<br />
            <b>Physics:</b> Intro to Physics, Physics for Electronics, Engineering Science.
          </div>
        </div>
      </Slug >
    )
  }
}

export class ActionMotorsport extends Component {
  render() {
    const { toggle, image } = this.props
    return (
      <Slug delay={600}>
        <div className='name'>Action Motorsport</div>
        <div className="close">
          <CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
        </div>
        <div className='description'>A website I built using HTML, CSS, JS, and a little PHP.</div>

        <div className='section1'>
          <div className='title-small'>Info</div>
          <div className='description'>
            The client is a budding company in the mechanics industry, specialising in motorsports racing.
            This is a simple single page website with elegant navigation + basic animation and parallax effects.
            New content to be added soon.
          </div>
        </div>

        <div className='tag'>#Web-dev #HTML #CSS #JS</div>
        <Link to={{ pathname: 'https://www.actionmotorsport.co.nz/' }} target='_blank' className='link' style={{ cursor: 'pointer' }}>
          View Project
          </Link>
        {/* <img className='image' src={this.props.image} /> */}
      </Slug>
    )
  }
}