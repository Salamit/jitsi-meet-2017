/* eslint-disable react/jsx-equals-spacing,max-len,react-native/no-inline-styles */
/* @flow */

import React, { Component } from 'react';
import { Watermarks } from '../../base/react';

import analyseVideo from './computerVision/analyseVideo';
import gum from './computerVision/gum';
import trackVideo from './computerVision/trackVideo';

declare var interfaceConfig: Object;

/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class BackgroundTracker extends Component {
    constructor(props){
        super(props)
        this.state={

        }

        this.drawHand = this.drawHand.bind(this);
    }

    drawHand(){
        var handCanvas = this.refs.handCanvas
        var handCanvasContext = handCanvas.getContext('2d');
        var hand = new Image()
        hand.src= 'hand.png'
        hand.onload = function(){
            handCanvasContext.drawImage(hand, 0, 0)}
    }

    componentDidMount(){

        gum(analyseVideo, this.refs.video, this.refs.inputCanvas, this.refs.outputCanvas)
        this.drawHand()

    }

    render() {
        return (
            <div style = {{ zIndex: 0 }} className="demo-frame">
                <div className="demo-container">
                    <video ref="video" width="640" height="480" hidden preload autoPlay loop muted></video>
                    <canvas ref="inputCanvas" width="640" height="480" hidden></canvas>
                    <canvas ref="outputCanvas" id="videoLayer" width="640" height="480"></canvas>
                    <canvas ref="handCanvas" id="handLayer" width="640" height="480"></canvas>
                </div>
            </div>
        );
    }
}