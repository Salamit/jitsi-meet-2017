/* eslint-disable react/jsx-equals-spacing,max-len,react-native/no-inline-styles */
/* @flow */

import React, { Component } from 'react';

import { Watermarks } from '../../base/react';

declare var interfaceConfig: Object;

/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class DrawingLayer extends Component{
    render(){
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
                    content='width=100%, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
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
                                width={ '100%' } />
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
        );
    }
}