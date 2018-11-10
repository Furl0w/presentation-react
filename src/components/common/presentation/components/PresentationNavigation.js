import React from 'react';
import IconButton from "material-ui/IconButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import NextIcon from 'material-ui/svg-icons/av/skip-next';
import PreviousIcon from 'material-ui/svg-icons/av/skip-previous';
import ForwardIcon from 'material-ui/svg-icons/av/fast-forward';
import RewindIcon from 'material-ui/svg-icons/av/fast-rewind';
import PauseIcon from 'material-ui/svg-icons/av/pause';


export default class PresentationNavigation extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="PresentationNavigation">
                <div>
                    <IconButton tooltip="First">
                        <PreviousIcon />
                    </IconButton>
                    <IconButton tooltip="Previous">
                        <RewindIcon />
                    </IconButton>
                    <IconButton tooltip="Play">
                        <PlayIcon />
                    </IconButton>
                    <IconButton tooltip="Play">
                        <PauseIcon />
                    </IconButton>
                    <IconButton tooltip="Next">
                        <NextIcon />
                    </IconButton>
                    <IconButton tooltip="Last">
                        <ForwardIcon />
                    </IconButton>
                    </div>
                </div>
            </MuiThemeProvider >
        );
    }
}