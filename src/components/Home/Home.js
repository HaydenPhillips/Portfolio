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
    const { toggle, name, description, tags, title, css, active, image, background } = this.props
    return (
      <div className="cell" style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }} onClick={!active ? toggle : undefined}>
        <Fade show={active} delay={active ? 500 : 0}>

          <div className="full-cell-content" style={{ backgroundImage: background, backgroundSize: 'cover' }}>
            <Slug delay={600}>

              <div className="close"><CloseOutlined type="close" style={{ cursor: 'pointer' }} onClick={toggle} /></div>
              <div className='full-cell-name'>{name}</div>
              <div className='full-cell-title'>{title}</div>
              <div className='full-cell-description'>{description}</div>
              <div className='full-cell-tag'>{tags}</div>
              <img className='image' src={image} />
              <div className="circle" style={{ background: css }} />

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
