import React, { Component } from 'react';

import { Watermarks } from '../../base/react';

//files imported for object detection
import tracking from './tracking.js';
import eye from './objects/eye';
import face from './objects/face';
import mouth from './objects/mouth';
import dat from './dat.gui';

/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class ObjectTracker extends Component {

// video tracker
    componentDidMount = function() {
        var video = document.getElementById('largeVideo');
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        var tracker = new tracking.ObjectTracker('face');
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track('#largeVideo', tracker, { camera: true });

        tracker.on('track', function(event) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            event.data.forEach(function(rect) {
                context.strokeStyle = 'red';
                context.strokeRect(((canvas.width)/2-rect.x), rect.y, rect.width, rect.height);
                context.font = '8px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('x: ' + (canvas.width-rect.x) + 'px', (canvas.width-rect.x) + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', (canvas.width-rect.x) + rect.width + 5, rect.y + 22);
                console.log("x="+rect.x);
                console.log("y="+rect.y);
            });
        });

        var gui = new dat.GUI();
        gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
        gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
        gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    };

    render(){
        return(
            <div class="demo-container">
                <div id = 'largeVideoWrapper'>
                    <br/><br/>
                    <video
                        autoPlay = { true }
                        id = 'largeVideo'
                        muted = { true }
                        style = {{ zIndex: 1 }}>
                    </video>
                    <canvas id="canvas"></canvas>
                </div>
            </div>
        );
    }
}