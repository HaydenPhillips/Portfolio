import React, { Component, Fragment } from 'react';
import 'materialize-css';
import ProjectRoy from './ProjectRoy';
import ProjectZap from './ProjectZap';
// import LayeredBackground from './LayeredBackground';


class Landing extends Component {

    render() {
        return (
            <Fragment>
                <div className="max-width-1920">
                    <section className="landing">
                        {/* <LayeredBackground /> */}
                    </section>
                    <section className="projects">
                        <h1>Projects</h1>
                        {/* <ParallaxTest /> */}
                    </section>
                    <section className="roy">
                        <ProjectRoy />
                    </section>

                    <section className="zap">
                        <ProjectZap />
                    </section>
                    <section className="random">
                        <h1>Project Three</h1>
                    </section>
                    <section className="about">
                        <h1>About</h1>
                    </section>
                    <section className="gallery">
                        <h1>Gallery</h1>
                    </section>
                    <section className="some-album">
                        <h1>Album One</h1>
                    </section>
                    <section className="album-name">
                        <h1>Album Two</h1>
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default Landing;