import React, { Component, Fragment } from 'react';
import 'materialize-css';
import { Button, Icon } from 'react-materialize';


class Landing extends Component {

    // const trigger = <Button>Open Modal</Button>;

    render() {
        return (
            <Fragment>
                <div class="set_high">
                    <div class="container1">
                        
                        <div class="layer-one">
                        </div>

                        <div class="layer-two">
                            <div class="box-inner">
                                <Button
                                    className="red"
                                    floating
                                    icon={<Icon>add</Icon>}
                                    large
                                    node="button"
                                    waves="light"
                                />

                                <Button
                                    node="button"
                                    style={{
                                        marginRight: '5px'
                                    }}
                                    waves="light"
                                />
                                <h1>tits</h1>
                                <h1>tots</h1>
                                <h1>tits</h1>
                                <h1>tots</h1>
                                <h1>tits</h1>
                                <h1>tots</h1>
                                <h1>tits</h1>
                                <h1>tots</h1>
                                <h1>tots</h1>

                            </div>
                        </div>

                        <div class="layer-three">
                        </div>
                    </div>
                </div>
            </Fragment>



        )
    }
}

export default Landing;