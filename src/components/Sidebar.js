import React, { Component, Fragment } from 'react';
import { Link } from "react-scroll";
// import './CSS/Sidebar.css';

class Sidebar extends Component {

    // handleSetActive = (to) => {
    //     console.log(to);
    //     document.getElementById('project').className = 'section-link-seen';
    // }
    // handleSetInactive = (to) => {
        // console.log(to);
        // let id = this.getElementById();
        // console.log(Link.activeClass.id);
        // console.log(document.getElementById('landing'));
        // console.log(className)
        // this.className = 'section-link-seen';
    // }
    render() {
        return (
            <Fragment>
                <div className="sidebar">
                    <div className="content waves-effect waves-poo">
                        <div className="section-list">


                            <Link
                                id="landing_link"
                                className="section-link"
                                activeClass="active"
                                to="landing"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                                // containerId= "ContainerElementID"
                            >
                                <hr className="section-line" />landing
                            </Link>

                            <Link
                                id="projects_link"
                                className="section-link"
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // onSetActive={this.handleSetActive}
                                onSetInactive={this.handleSetInactive}
                            >

                                <hr className="section-line" />
                                projects
                            </Link>

                            <Link
                                id="roy_link"
                                className="sub-section-link"
                                activeClass="active"
                                to="roy"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="sub-section-line" />roy
                            </Link>

                            <Link
                                id="zap_link"
                                className="sub-section-link"
                                activeClass="active"
                                to="zap"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="sub-section-line" />zap
                            </Link>

                            <Link
                                id="random_link"
                                className="sub-section-link"
                                activeClass="active"
                                to="random"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="sub-section-line" />processing
                            </Link>

                            <Link
                                id="things_link"
                                className="section-link"
                                activeClass="active"
                                to="things"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="section-line" />things
                            </Link>

                            <Link
                                id="about_link"
                                className="section-link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="section-line" />about
                            </Link>

                            <Link
                                id="gallery_link"
                                className="section-link"
                                activeClass="active"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="section-line" />gallery
                            </Link>

                            <Link
                                id="some-album_link"
                                className="sub-section-link"
                                activeClass="active"
                                to="some-album"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="sub-section-line" />some album
                            </Link>

                            <Link
                                id="album-name_link"
                                className="sub-section-link"
                                activeClass="active"
                                to="album-name"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="sub-section-line" />album name
                            </Link>

                            <Link
                                id="marlborough_link"
                                className="sub-section-link"
                                activeClass="active"
                                to="marlborough"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="sub-section-line" />marlborough
                            </Link>

                            <Link
                                id="tasman_link"
                                className="sub-section-link"
                                activeClass="active"
                                to="tasman"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetInactive={this.handleSetInactive}
                            >
                                <hr className="sub-section-line" />tasman
                            </Link>

                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default Sidebar;
