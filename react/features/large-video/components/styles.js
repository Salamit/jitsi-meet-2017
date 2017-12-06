import { ColorPalette, createStyleSheet } from '../../base/styles';

export default createStyleSheet({
    /**
     * The style of the avatar of the participant displayed in largeVideo. It's
     * an addition to the default style of Avatar.
     */
    avatar: {
        alignSelf: 'center',
        borderRadius: 100,
        flex: 0,
        height: 200,
        width: 200
    },

    /**
     * Large video container style.
     */
    largeVideo: {
        alignItems: 'stretch',
        backgroundColor: ColorPalette.appBackground,
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },

    /**
     * Obtian clicks from the entire browser window.
     */
    dimScreen: {
        position: 'absolute',
        padding: 0,
        margin: 0,
        top: 0,
        left: 0,
        flex: 1
    }
});
