import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import styles from './styles';

/**
 * Signals conference to select a participant.
 *
 * @returns {Function}
 */

class Socketio extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            username: 'react',
            room: 'test',
            endpoint: 'https://192.168.8.110:3030'
        };
        this.socket = socketIOClient(this.state.endpoint);
    }
    componentDidMount() {
        const socket = this.socket;

        socket.emit('joinroom', { room: 'test',
            username: 'react' });

        // listen on socket events-------------------------------------
        socket.on('joinroom', user => {
            console.log(user);
        });
        socket.on('update-position', update => {
            console.log(update);
        });

    }

    // onclick function-----------------------------------------------------
    /**
     * Emits onclick coordinates on browser
     *
     * @private
     */
    _onMouseClick(e) {
        this.setState({ x: e.pageX,
            y: e.pageY });
        const width = window.innerWidth;
        const height = window.innerHeight;

        console.log(`${e.pageX} ${e.pageY}`);
        console.log(`${width} and  ${height}`);
        this.socket.emit('onclick', { x: e.pageX,
            y: e.pageY,
            width,
            height,
            username: this.username,
            room: this.room });
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <div
                className = 'dimScreen'
                id = 'cross'
                onClick = { this._onMouseClick.bind(this) } />
        );
    }
}
export default Socketio;
