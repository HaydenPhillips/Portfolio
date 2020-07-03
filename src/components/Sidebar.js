import React, { Component, Fragment } from 'react';
import { Link, animateScroll } from "react-scroll";
// import './CSS/Sidebar.css';

class Sidebar extends Component {

    render() {
        return (
            <Fragment>
                <div className="sidebar">
                    <div className="content waves-effect waves-poo">
                        <div className="section-list">


                            <div className="section-item">
                                <Link className="section-link" activeClass="active" to="landing" spy={true} smooth={true} duration={500}>
                                    <div className="section-line" />
                                    <div className="section-title">landing</div>
                                </Link>
                            </div>

                            <div className="section-item">
                                <Link className="section-link" activeClass="active" to="projects" spy={true} 
                                smooth={true} duration={500} onSetActive={this.handleSetActive}>
                                    <div className="section-line" />
                                    <div className="section-title">projects</div>
                                </Link>

                                <div className="sub-section-item">
                                    <Link className="sub-section-link" activeClass="active" to="roy" spy={true} smooth={true} duration={500}>
                                        <div className="sub-section-line" />
                                        <div className="sub-section-title">roy</div>
                                    </Link>
                                </div>

                                <div className="sub-section-item">
                                    <Link className="sub-section-link" activeClass="active" to="zap" spy={true} smooth={true} duration={500}>
                                        <div className="sub-section-line" />
                                        <div className="sub-section-title">zap</div>
                                    </Link>
                                </div>

                                <div className="sub-section-item">
                                    <Link className="sub-section-link" activeClass="active" to="random" spy={true} smooth={true} duration={500}>
                                        <div className="sub-section-line" />
                                        <div className="sub-section-title">processing</div>
                                    </Link>
                                </div>
                            </div>

                            <div className="section-item">
                                <Link className="section-link" activeClass="active" to="things" spy={true} smooth={true} duration={500}>
                                    <div className="section-line" />
                                    <div className="section-title">things</div>
                                </Link>
                            </div>

                            <div className="section-item">
                                <Link className="section-link" activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                                    <div className="section-line" />
                                    <div className="section-title">about</div>
                                </Link>
                            </div>

                            <div className="section-item">
                                <Link className="section-link" activeClass="active" to="gallery" spy={true} smooth={true} duration={500}>
                                    <div className="section-line" />
                                    <div className="section-title">gallery</div>
                                </Link>

                                <div className="sub-section-item">
                                    <Link className="sub-section-link" activeClass="active" to="album" spy={true} smooth={true} duration={500}>
                                        <div className="sub-section-line" />
                                        <div className="sub-section-title">some album</div>
                                    </Link>
                                </div>

                                <div className="sub-section-item">
                                    <Link className="sub-section-link" activeClass="active" to="album-name" spy={true} smooth={true} duration={500}>
                                        <div className="sub-section-line" />
                                        <div className="sub-section-title">album name</div>
                                    </Link>
                                </div>

                                <div className="sub-section-item">
                                    <Link className="sub-section-link" activeClass="active" to="marlborough" spy={true} smooth={true} duration={500}>
                                        <div className="sub-section-line" />
                                        <div className="sub-section-title">marlborough</div>
                                    </Link>
                                </div>
                                <div className="sub-section-item">
                                    <Link className="sub-section-link" activeClass="active" to="tasman" spy={true} smooth={true} duration={500}>
                                        <div className="sub-section-line" />
                                        <div className="sub-section-title">tasman</div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default Sidebar;
