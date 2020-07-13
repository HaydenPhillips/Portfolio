import React, { Component, Fragment } from 'react';
import { Link } from "react-scroll";


class Projects extends Component {
    render() {
        return (
            <Fragment>

                <div className="grid_container">

                    <div className="nav_">
                        <Link className="nav_link" activeClass="active" to="one" spy={true} smooth={true} duration={500}>
                            ProjectOne
                        </Link>
                        <Link className="nav_link" activeClass="active" to="two" spy={true} smooth={true} duration={500}>
                            ProjectTwo
                    </Link>
                    </div>

                    <section className="one">
                        <h1>Projects Page</h1>

                    </section>

                    <section className="two">
                        <h1>Some Ting</h1>
                    </section>

                </div>

            </Fragment>
        )
    }
}

export default Projects;