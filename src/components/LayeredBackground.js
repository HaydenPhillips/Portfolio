import React, { Component, Fragment } from 'react';
import 'materialize-css';
import { Button, Icon } from 'react-materialize';


class LayeredBackground extends Component {

    render() {
        return (
            <Fragment>
                <div className="set_high">
                    <div className="container1">
                        
                        <div className="layer-one">
                        </div>

                        <div className="layer-two">
                            <div className="box-inner">
                                
                                <h1>boots</h1>
                                <h1>n</h1>
                                <h1>cats</h1>
                                <h1>n</h1>
                                <h1>boots</h1>
                                <h1>n</h1>
                                <h1>cats</h1>
                                <h1>n</h1>
                                <h1>boots</h1>

                            </div>
                        </div>

                        <div className="layer-three">
                        </div>
                    </div>
                </div>
            </Fragment>



        )
    }
}

export default LayeredBackground;