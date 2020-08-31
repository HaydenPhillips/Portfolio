import React, { Component } from 'react'
import { config } from 'react-spring/renderprops'
import Grid from './Grid'
import { Slug, Fade, FadeUp } from './Primitives'
import data from './Data'
import '../../CSS/Home/Home.css'
import 'antd/dist/antd.css'
import { CloseOutlined } from '@ant-design/icons'

class Cell extends Component {
  render() {
    const { toggle, name, description, tags, role, roleDes, area, css, active, image, } = this.props

    return (
      <div className="cell" style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }} onClick={!active ? toggle : undefined}>
        {/* {active ? <img src={background} className='bg' /> : null} */}

        <Fade show={active} delay={active ? 700 : 0}>

          <div className={'full-cell-content ' + area}>
            {/* <img className='bg' src={background} /> */}
            <Slug delay={600}>

              <div className='name'>{name}</div>
              <div className="close"><CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} /></div>

              <div className='description'>{description}</div>

              <div className='role'>{role}</div>
              <div className='roleDes'>{roleDes}</div>



              <div className='tag'>{tags}</div>
              <img className='image' src={image} />
              {/* <div className="circle" style={{ background: css }} /> */}

            </Slug>
          </div>
        </Fade>

        <FadeUp show={!active} delay={active ? 0 : 400}>
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
        lockScroll={false}
        // Delay when active elements (blown up) are minimized again
        closeDelay={500}
        // Regular react-spring configs
        config={config.slow}>
        {(data, active, toggle) => (
          <Cell {...data} active={active} toggle={toggle} />
        )}
      </Grid>
    )
  }
}


class roy extends Component {
  render() {
    const { toggle, name, tags, image, } = this.props

    return (
      <div className={'full-cell-roy'}>
        <Slug delay={600}>

          <div className='name'>{name}</div>
          <div className="close"><CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} /></div>

          <div className='description'>High-end menswear brand based in Wellington New Zealand.</div>

          <div className='role'>Founding Director  Designer</div>
          <div className='roleDes'>
            - Designed and manufactured high-quality garments
            - produced captivating digital content
            - coordinated all activities required to bring the product to market
            - manifested sales channels through online and boutique clothing stores across the nation.
              </div>

          <div className='tag'>{tags}</div>
          <img className='image' src={image} />
        </Slug>
      </div>
    )
  }
}