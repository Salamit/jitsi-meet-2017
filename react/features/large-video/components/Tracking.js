import React, { Component } from 'react';

import { Watermarks } from '../../base/react';

//files imported for object detection
import tracking from 'tracking';
import EventEmiter from './utils/EventEmitter';
import Canvas from './utils/Canvas';
import DisjointSet from './utils/DisjointSet';
import Image from './utils/Image';
import ViolaJones from './detection/ViolaJones';
import Brief from './features/Brief';
import Fast from './features/Fast';
import Math from './math/Math';
import Matrix from './math/Matrix';
import EPnP from './pose/EPnP';
import Tracker from './trackers/Tracker';
import TrackerTask from './trackers/TrackerTask';
import ColorTracker from './trackers/ColorTracker';
import ObjectTracker from './trackers/ObjectTracker';
import LandmarksTracker from './trackers/LandmarksTracker';
import Regressor from './alignment/Regressor';
import LBF from './alignment/LBF';

import Eye from './detection/training/haar/eye';
import Face from './detection/training/haar/face';
import Mouth from './detection/training/haar/mouth';



/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class Tracking extends Component {

}