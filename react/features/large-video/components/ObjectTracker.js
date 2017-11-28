import React, { Component } from 'react';

import { Watermarks } from '../../base/react';

//files imported for object detection
import tracking from './tracking-min';
import eye from './objects/eye-min';
import face from './objects/mouth-min';
import mouth from './objects/face-min';


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
                objects.setStepSize(1.7);
                tracking.track('#largeVideo', objects);
                objects.on('track', function(event) {
                    event.data.forEach(function(rect) {
                        window.plot(rect.x, rect.y, rect.width, rect.height);
                    });
                });

                window.plot = function(x, y, w, h) {
                    var rect = document.createElement('div');
                    document.querySelector('.demo-container').appendChild(rect);
                    rect.classList.add('rect');
                    rect.style.width = w + 'px';
                    rect.style.height = h + 'px';
                    rect.style.left = (video.offsetLeft + x) + 'px';
                    rect.style.top = (video.offsetTop + y) + 'px';
                };
            };
            render(){
                return(
                    <div style = {{ zIndex: 0 }}>
                        {this.componentDidMount()}
                    </div>
                );
            }
}