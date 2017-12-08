import React, { Component } from 'react';

import { Watermarks } from '../../base/react';

//files imported for object detection
import tracking from './tracking.js';
import eye from './objects/eye';
import face from './objects/face';
import mouth from './objects/mouth';
import stats from './stats.min';
import dat from './dat.gui';

// import img from '../../../../images/avatar1.png';
// const img = require('../../../../images/avatar1.png');



/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class ObjectTracker extends Component {
//video tracker 1
//     componentDidMount = function() {
//         var video = document.getElementById('largeVideo');
//         var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
//         objects.setInitialScale(4);
//         objects.setStepSize(2);
//         objects.setEdgesDensity(0.1);
//         tracking.track('#largeVideo', objects);
//         objects.on('track', function(event) {
//
//             event.data.forEach(function(rect) {
//                 window.plot(rect.x, rect.y, rect.width, rect.height);
//             });
//         });
//
//                 window.plot = function(x, y, w, h) {
//                     var rect = document.createElement('div');
//                     document.querySelector('.demo-container').appendChild(rect);
//                     rect.style.border = '2px solid #a64ceb';
//                     rect.style.position = 'absolute';
//                     rect.classList.add('rect');
//                     rect.style.zIndex = '2';
//                     rect.style.width = w + 'px';
//                     rect.style.height = h + 'px';
//                     rect.style.left = (video.offsetLeft + y) + 'px';
//                     rect.style.top = (video.offsetTop + x) + 'px';
//                     console.log("x="+x);
//                     console.log("y="+y);
//                 };
//         var gui = new dat.GUI();
//         gui.add(objects, 'edgesDensity', 0.1, 0.5).step(0.01);
//         gui.add(objects, 'initialScale', 1.0, 10.0).step(0.1);
//         gui.add(objects, 'stepSize', 1, 5).step(0.1);
//     };

//video tracker 2
//             componentDidMount = function() {
//                 console.log("sjjdsjjdjsjdsjjdsj")
//                 console.log(eye);
//                 var video = document.getElementById('largeVideo');
//                 console.log("Video");
//                 console.log(video);
//                 var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
//                 objects.setStepSize(1.7);
//                 tracking.track('#largeVideo', objects);
//                 objects.on('track', function(event) {
//                     event.data.forEach(function(rect) {
//                         window.plot(rect.x, rect.y, rect.width, rect.height);
//                     });
//                 });
//
//                 window.plot = function(x, y, w, h) {
//                     var rect = document.createElement('div');
//                     document.querySelector('.demo-container').appendChild(rect);
//                     rect.style.border = '2px solid #a64ceb';
//                     //rect.style.left = '-1000px';
//                     rect.style.position = 'absolute';
//                     //rect.style.top = '-1000px';
//                     rect.classList.add('rect');
//                     rect.style.zIndex = '2';
//                     rect.style.width = w + 'px';
//                     rect.style.height = h + 'px';
//                     rect.style.left = (video.offsetLeft + x) + 'px';
//                     rect.style.top = (video.offsetTop + y) + 'px';
//                     console.log("x="+x);
//                     console.log("y="+y);
//                 };
//             };

// video tracker 3
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
                context.strokeStyle = 'blue';
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '8px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
                console.log("x="+rect.x);
                console.log("y="+rect.y);
            });
        });

        var gui = new dat.GUI();
        gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
        gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
        gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    };

//image tracker
//     componentDidMount = function() {
//         console.log("sjjdsjjdjsjdsjjdsj")
//         console.log(eye);
//         var image = document.getElementById('img-tracker');
//         var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
//         objects.setStepSize(1.7);
//         tracking.track('#img-tracker', objects);
//         objects.on('track', function(event) {
//             console.log("trackingObjects");
//             event.data.forEach(function(rect) {
//                 window.plot(rect.x, rect.y, rect.width, rect.height);
//             });
//         });
//
//         window.plot = function(x, y, w, h) {
//             var rect = document.createElement('div');
//             document.querySelector('.demo-container').appendChild(rect);
//             rect.style.border = '2px solid #a64ceb';
//             rect.style.backgroundColor = 'blue';
//             //rect.style.left = '-1000px';
//             rect.style.position = 'absolute';
//             //rect.style.top = '-1000px';
//             rect.classList.add('rect');
//             rect.style.zIndex = '5';
//             rect.style.width = w + 'px';
//             rect.style.height = h + 'px';
//             rect.style.left = (image.offsetLeft + x) + 'px';
//             rect.style.top = (image.offsetTop + y) + 'px';
//             console.log("x="+x);
//             console.log("y"+y);
//         };
//     };
            render(){
                return(
                    <div class="demo-container">
                        <div id = 'largeVideoWrapper'>
                            <br/><br/>
                            {/*<img id="img-tracker"*/}
                            {/*src="https://www.clarabridge.com/wp-content/uploads/2014/11/customersentiment_face5.png"/>*/}
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