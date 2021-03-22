import React, { Component, Fragment, cloneElement } from 'react';
import Dot from './Dot';


class Slides extends Component {
    constructor() {
        super()
        this.state = { 
            active: 0 
        }
        this.goPrev = this.goPrev.bind(this)
        this.goNext = this.goNext.bind(this)

        console.log("this.state.active: " + this.state.active)
    }

    goPrev() {
        if (this.state.active > 0) {
            this.setState(prevState => ({
                active: prevState.active - 1
            }))
        }
    }

    goNext() {
        if (this.state.active < this.props.children.length - 1) {
            this.setState(prevState => ({
                active: prevState.active + 1
            }))
        }
    }

    render() {
        const percentage = -100 * this.state.active + '%'
        console.log("percentage: " + percentage);
        return (
            <Fragment>
                <div className="slides" style={{ transform: `translate3d(0, ${percentage}, 0)` }}>
                    {
                        this.props.children.map(
                            (child, index) => {
                                if (index === this.state.active) {
                                    return (
                                        cloneElement(child, { className: child.props.className + ' active' })
                                    )
                                }
                                return child
                            }
                        )
                    }
                </div>

                <div className="buttons">
                    <button onClick={this.goPrev} disabled={this.state.active === 0}>
                        &uarr; Previous Slide
                    </button>

                    <button onClick={this.goNext} disabled={this.state.active === this.props.children.length - 1}>
                        Next Slide &darr;
                    </button>
                </div>

                <div className="dot-navbar">
                    <div className="dot-grid">
                        {
                            this.props.children.map(
                                (child, index) => (
                                    // {
                                    //     if(this) {

                                    //     }
                                    // }
                                    < Dot
                                        // index = { index }
                                        // active={ index === this.state.active ? true : false }
                                        className={index === this.state.active ? "dot active" : "dot"}
                                        onClick={() => this.setState({ active: index })}>
                                        {
                                            console.log('Slide_this.state.active: ' + this.state.active),
                                            console.log('Slide_index: ' + index),
                                            index + 1
                                        }
                                    </Dot>
                                )
                            )
                        }
                    </div>

                </div>

                {/* <ul className="dots">
                    {
                        this.props.children.map(
                            (child, index) => (
                                <li className={index === this.state.active ? 'active' : ''}>
                                    <Dot onClick={() => this.setState({ active: index })}>{index + 1}</Dot>
                                </li>
                            )
                        )
                    }
                </ul> */}

                {/* <ul className="dots">
                    {
                        this.props.children.map(
                            (child, index) => (
                                <li className={index === this.state.active ? 'active' : ''}>
                                    <button onClick={() => this.setState({ active: index })}>
                                        {index + 1}
                                    </button>
                                </li>
                            )
                        )
                    }
                </ul> */}
            </Fragment >
        )
    }
}


export default Slides;

{/* <div className="dot-navbar">
<Dot />
</div> */}