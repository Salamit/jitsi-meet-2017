import React, { Component } from 'react';

import { Watermarks } from '../../base/react';

//files imported for object detection
// const tracking = require('./tracking-min');
// const eye = require('./objects/eye-min');
// const face = require('./objects/face-min');
// const mouth = require('./objects/mouth-min');
import tracking from './tracking.js';
import eye from './objects/eye';
///import face from './objects/face';
//import mouth from './objects/mouth';


/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class ObjectTracker extends Component {

        componentDidMount(){

            console.log("sjjdsjjdjsjdsjjdsj")
            console.log(eye);
            var video = document.getElementById('largeVideo');
            console.log("Video");
            console.log(video);
            var objects = new tracking.ObjectTracker([ 'eye']);
            objects.setStepSize(1.7);
            tracking.track('#largeVideo', objects);
            objects.on('track', function(event) {
                event.data.forEach(function(rect) {
                    window.plot(rect.x, rect.y, rect.width, rect.height);

                });
            });

            window.plot = function(x, y, w, h) {


                // var element = document.getElementsByClassName("rect");
                // if(element!=null){
                //     element.parentNode.removeChild(element);
                // }

                var rect = document.createElement('div');

                document.querySelector('.demo-container').appendChild(rect);

                rect.style.border = '2px solid #a64ceb';
                //rect.style.left = '-1000px';
                rect.style.position = 'absolute';
                //rect.style.top = '-1000px';
                rect.classList.add('rect');
                rect.style.width = w + 'px';
                rect.style.height = h + 'px';
                rect.style.left = (video.offsetLeft + x) + 'px';
                rect.style.top = (video.offsetTop + y) + 'px';
            };


        }
            // componentDidMount = function() {
            //
            //
            //     console.log("sjjdsjjdjsjdsjjdsj")
            //     console.log(eye);
            //     var video = document.getElementById('largeVideo');
            //     console.log("Video");
            //     console.log(video);
            //     var objects = new tracking.ObjectTracker([ 'eye']);
            //     objects.setStepSize(1.7);
            //     tracking.track('#largeVideo', objects);
            //     objects.on('track', function(event) {
            //         event.data.forEach(function(rect) {
            //             window.plot(rect.x, rect.y, rect.width, rect.height);
            //         });
            //     });
            //
            //     window.plot = function(x, y, w, h) {
            //         var rect = document.createElement('div');
            //         document.querySelector('.demo-container').appendChild(rect);
            //         rect.classList.add('rect');
            //         rect.style.width = w + 'px';
            //         rect.style.height = h + 'px';
            //         rect.style.left = (video.offsetLeft + x) + 'px';
            //         rect.style.top = (video.offsetTop + y) + 'px';
            //     };
            // };
            render(){
                return(
                        <div id = 'largeVideoWrapper'>
                            <div class="demo-frame">
                                <div class="demo-container">
                            <video
                                autoPlay = { true }
                                id = 'largeVideo'
                                muted = { true }
                                style = {{ zIndex: 1 }}>
                            </video>
                        </div>
                        {/*{this.componentDidMount()}*/}
                    </div>
                        </div>
                );
            }
}