import React, { Component, Fragment } from 'react';
// import 'materialize-css';
import ProjectRoy from './ProjectRoy'
import Slides from './Slides'

class Maze extends Component {

    render() {
        return (
            <Fragment>
                <Slides>
                    <div className="slide" >
                        <h2>Awesome Slide Title 1</h2>
                    </div>
                    <div className="slide" >
                        <h2>Awesome Slide Title 2</h2>
                    </div>
                    <div className="slide" >
                        <section className="roy">
                            <ProjectRoy />
                        </section>
                    </div>

                    <div className="slide">
                        <h2>Awesome Slide Title 4</h2>
                    </div>
                    <div className="slide" style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)'
                    }}>
                        <h2>Awesome Slide Title 5</h2>
                    </div>
                </Slides>
            </Fragment>
        )
    }
}

export default Maze