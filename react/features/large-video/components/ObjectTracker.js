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

    componentDidMount = function() {
        var video = document.getElementById('largeVideo');
        var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
        objects.setInitialScale(4);
        objects.setStepSize(2);
        objects.setEdgesDensity(0.1);
        tracking.track('#largeVideo', objects,{ camera: true });
        objects.on('track', function(event) {
            event.data.forEach(function(rect) {
                window.plot(rect.x, rect.y, rect.width, rect.height);
            });
        });

        window.plot = function(x, y, w, h) {
            var rect = document.createElement('div');
            document.querySelector('.demo-container').appendChild(rect);
            rect.style.border = '2px solid #a64ceb';
            //rect.style.left = '-1000px';
            rect.style.position = 'absolute';
            //rect.style.top = '-1000px';
            rect.classList.add('rect');
            rect.style.zIndex = '2';
            rect.style.width = w + 'px';
            rect.style.height = h + 'px';
            rect.style.left = (video.offsetLeft + x) + 'px';
            rect.style.top = (video.offsetTop + y) + 'px';
            console.log("x="+x);
            console.log("y="+y);
        };
    };

//video tracker
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
                            {/*{this.componentDidMount()}*/}
                        </div>
                    </div>
                );
            }
}