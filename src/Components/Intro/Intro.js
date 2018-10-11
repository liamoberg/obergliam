import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './Intro.css';

class Intro extends Component {
    render() {
        return (
            <div className="Test">
                <Tilt className="Tilt" options={{ max : 25 }} >
                    <div className="Tilt-inner"></div>
                </Tilt>
            </div>
        );
    }
}

export default Intro;