import React, { Component, Fragment } from 'react';
import 'materialize-css';
import ProjectRoy from './ProjectRoy'


class Landing extends Component {

    render() {
        return (
            <Fragment>
                <section className="landing">
                    <h1>Landing</h1>
                </section>
                <section className="projects">
                    <h1>Projects</h1>
                </section>
                <section className="roy">
                    <ProjectRoy />
                </section>

                <section className="zap">
                    <h1>Project Two</h1>
                </section>
                <section className="random">
                    <h1>Project Three</h1>
                </section>
                <section className="things">
                    <h1>Things</h1>
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
                <section className="marlborough">
                    <h1>marlborough</h1>
                </section>
                <section className="tasman">
                    <h1>tasman</h1>
                </section>
            </Fragment>
        )
    }
}

export default Landing;