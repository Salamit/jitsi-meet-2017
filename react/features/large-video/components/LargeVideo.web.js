/* eslint-disable react/jsx-equals-spacing,max-len,react-native/no-inline-styles */
/* @flow */

import React, { Component } from 'react';

import { Watermarks } from '../../base/react';
import { VideoQualityLabel } from '../../video-quality';
import { RecordingLabel } from '../../recording';

declare var interfaceConfig: Object;

/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class LargeVideo extends Component<*> {

    getDrawingLayer(){
        render()
        {
            return(
                <div style = {{ zIndex: 0 }}>
                    <meta charSet='utf-8' />
                    <meta
                        content='IE=Edge'
                        httpEquiv='X-UA-Compatible' />
                    <meta
                        content='width=320, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                        name='viewport' />
                    <link
                        href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
                        rel='stylesheet' />
                    <link
                        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
                        rel='stylesheet' />
                    <link
                        href='./stylesheets/draw.css'
                        rel='stylesheet'
                        type='text/css' />
                    {/* <link*/}
                    {/* href='../../../../libs/draw.js'*/}
                    {/* type='text/javascript' />*/}
                    <meta
                        content='width=200, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                        name='viewport' />
                    <div className='container'>
                        <section
                            className='body-content row'
                            id='sketchapp'
                            style={{ marginLeft: 0,
                                marginRight: 0 }}>
                            {/*<h1 style={{ marginBottom: 20 }}>Let's Draw</h1>*/}
                            <a
                                className='pull-right tjsbutton'
                                onClick='TogetherJS(this); return false;'>
                                <img
                                    src='https://togetherjs.com/images/start-togetherjs-blue.png'
                                    style={{ width: 100 }} />
                            </a>
                            <div
                                className='btn-group btn-group-justified'
                                style={{ marginLeft: 'auto',
                                    marginRight: 'auto' }}>
                                <a className='btn btn-info color-picker upper-button'>Blue</a>
                                <a className='btn btn-success color-picker'>Green</a>
                                <a className='btn btn-warning color-picker'>Yellow</a>
                                <a className='btn btn-danger color-picker'>Red</a>
                                <a
                                    className='btn btn-success color-picker black-pick upper-button'
                                    style={{ borderBottomWidth: 0 }}>Black</a>
                            </div>
                            <div className='clearfix' />
                            <div
                                id='sketchContainer'
                                style={{ width: '100%',
                                    border: '1px solid rgba(0, 0, 0, 0.2)',
                                    height: 470 }}>
                                <canvas
                                    height={ 500 }
                                    id='sketch'
                                    width={ 1150 } />
                            </div>
                            <div
                                className='btn-group btn-group-justified'
                                style={{ marginLeft: 'auto',
                                    marginRight: 'auto' }}>
                                <a
                                    className='btn btn-info user-color-pick bottom-button'
                                    style={{ width: '35%' }}>User Color</a>
                                <a
                                    className='btn btn-success plus-size'
                                    style={{ width: '15%' }}>
                                    <i className='fa fa-plus-square' />
                                </a>
                                <a
                                    className='btn btn-warning clear'
                                    style={{ width: '15%' }}>
                                    <i className='fa fa-times-circle' />
                                </a>
                                <a
                                    className='btn btn-danger minus-size'
                                    style={{ width: '15%' }}>
                                    <i className='fa fa-minus-square' />
                                </a>
                                <a
                                    className='btn btn-default eraser bottom-button'
                                    style={{ width: '35%',
                                        borderTopWidth: 0 }}>
                                    <i className='fa fa-eraser' />
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            )
        }
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
                className = 'videocontainer'
                id = 'largeVideoContainer'>
                <div id = 'sharedVideo'>
                    <div id = 'sharedVideoIFrame' />
                </div>
                <div id = 'etherpad' />

                <Watermarks />

                <div id = 'dominantSpeaker'>
                    <div className = 'dynamic-shadow' />
                    <img
                        id = 'dominantSpeakerAvatar'
                        src = '' />
                </div>
                <div id = 'remotePresenceMessage' />
                <span id = 'remoteConnectionMessage' />
                <div>
                    <div className = 'video_blurred_container'>
                        <video
                            autoPlay = { true }
                            id = 'largeVideoBackground'
                            muted = 'true' />
                    </div>
                    {

                        /**
                         * FIXME: the architecture of elements related to the
                         * large video and  the naming. The background is not
                         * part of largeVideoWrapper because we are controlling
                         * the size of the video through largeVideoWrapper.
                         * That's why we need another container for the the
                         * background and the largeVideoWrapper in order to
                         * hide/show them.
                         */
                    }
                    <div id = 'largeVideoWrapper'>
                        <video
                            autoPlay = { true }
                            id = 'largeVideo'
                            muted = { true }
                            style = {{ zIndex: 1 }} />
                    </div>
                    <div id = 'largeVideoWrapper'>
                        <br /><br /><br />
                        {/*<div style = {{ zIndex: 0 }}>*/}
                            {/*<meta charSet='utf-8' />*/}
                            {/*<meta*/}
                                {/*content='IE=Edge'*/}
                                {/*httpEquiv='X-UA-Compatible' />*/}
                            {/*<meta*/}
                                {/*content='width=320, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'*/}
                                {/*name='viewport' />*/}
                            {/*<link*/}
                                {/*href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'*/}
                                {/*rel='stylesheet' />*/}
                            {/*<link*/}
                                {/*href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'*/}
                                {/*rel='stylesheet' />*/}
                            {/*<link*/}
                                {/*href='./stylesheets/draw.css'*/}
                                {/*rel='stylesheet'*/}
                                {/*type='text/css' />*/}
                            {/*/!* <link*!/*/}
                            {/*/!* href='../../../../libs/draw.js'*!/*/}
                            {/*/!* type='text/javascript' />*!/*/}
                            {/*<meta*/}
                                {/*content='width=200, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'*/}
                                {/*name='viewport' />*/}
                            {/*<div className='container'>*/}
                                {/*<section*/}
                                    {/*className='body-content row'*/}
                                    {/*id='sketchapp'*/}
                                    {/*style={{ marginLeft: 0,*/}
                                        {/*marginRight: 0 }}>*/}
                                    {/*/!*<h1 style={{ marginBottom: 20 }}>Let's Draw</h1>*!/*/}
                                    {/*<a*/}
                                        {/*className='pull-right tjsbutton'*/}
                                        {/*onClick='TogetherJS(this); return false;'>*/}
                                        {/*<img*/}
                                            {/*src='https://togetherjs.com/images/start-togetherjs-blue.png'*/}
                                            {/*style={{ width: 100 }} />*/}
                                    {/*</a>*/}
                                    {/*<div*/}
                                        {/*className='btn-group btn-group-justified'*/}
                                        {/*style={{ marginLeft: 'auto',*/}
                                            {/*marginRight: 'auto' }}>*/}
                                        {/*<a className='btn btn-info color-picker upper-button'>Blue</a>*/}
                                        {/*<a className='btn btn-success color-picker'>Green</a>*/}
                                        {/*<a className='btn btn-warning color-picker'>Yellow</a>*/}
                                        {/*<a className='btn btn-danger color-picker'>Red</a>*/}
                                        {/*<a*/}
                                            {/*className='btn btn-success color-picker black-pick upper-button'*/}
                                            {/*style={{ borderBottomWidth: 0 }}>Black</a>*/}
                                    {/*</div>*/}
                                    {/*<div className='clearfix' />*/}
                                    {/*<div*/}
                                        {/*id='sketchContainer'*/}
                                        {/*style={{ width: '100%',*/}
                                            {/*border: '1px solid rgba(0, 0, 0, 0.2)',*/}
                                            {/*height: 470 }}>*/}
                                        {/*<canvas*/}
                                            {/*height={ 500 }*/}
                                            {/*id='sketch'*/}
                                            {/*width={ 1150 } />*/}
                                    {/*</div>*/}
                                    {/*<div*/}
                                        {/*className='btn-group btn-group-justified'*/}
                                        {/*style={{ marginLeft: 'auto',*/}
                                            {/*marginRight: 'auto' }}>*/}
                                        {/*<a*/}
                                            {/*className='btn btn-info user-color-pick bottom-button'*/}
                                            {/*style={{ width: '35%' }}>User Color</a>*/}
                                        {/*<a*/}
                                            {/*className='btn btn-success plus-size'*/}
                                            {/*style={{ width: '15%' }}>*/}
                                            {/*<i className='fa fa-plus-square' />*/}
                                        {/*</a>*/}
                                        {/*<a*/}
                                            {/*className='btn btn-warning clear'*/}
                                            {/*style={{ width: '15%' }}>*/}
                                            {/*<i className='fa fa-times-circle' />*/}
                                        {/*</a>*/}
                                        {/*<a*/}
                                            {/*className='btn btn-danger minus-size'*/}
                                            {/*style={{ width: '15%' }}>*/}
                                            {/*<i className='fa fa-minus-square' />*/}
                                        {/*</a>*/}
                                        {/*<a*/}
                                            {/*className='btn btn-default eraser bottom-button'*/}
                                            {/*style={{ width: '35%',*/}
                                                {/*borderTopWidth: 0 }}>*/}
                                            {/*<i className='fa fa-eraser' />*/}
                                        {/*</a>*/}
                                    {/*</div>*/}
                                {/*</section>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <span id = 'localConnectionMessage' />
                { interfaceConfig.filmStripOnly ? null : <VideoQualityLabel /> }
                <RecordingLabel />
            </div>
        );
    }


}
