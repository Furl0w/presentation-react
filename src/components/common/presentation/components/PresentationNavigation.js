import React from 'react';

import { sendCommand } from "../../../../actions/index";

import { connect } from "react-redux";

import IconButton from "material-ui/IconButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import NextIcon from 'material-ui/svg-icons/av/skip-next';
import PreviousIcon from 'material-ui/svg-icons/av/skip-previous';
import ForwardIcon from 'material-ui/svg-icons/av/fast-forward';
import RewindIcon from 'material-ui/svg-icons/av/fast-rewind';
import PauseIcon from 'material-ui/svg-icons/av/pause';


class PresentationNavigation extends React.Component {

    handleClick = (e) => this.props.dispatch(sendCommand(e.currentTarget.className));

    render() {
        return (
            <MuiThemeProvider>
                <div className="PresentationNavigation">
                    <div>
                        <IconButton tooltip="First" className="cmd-first" onClick={this.handleClick}>
                            <PreviousIcon />
                        </IconButton>
                        <IconButton tooltip="Previous" className="cmd-prev" onClick={this.handleClick}>
                            <RewindIcon />
                        </IconButton>
                        <IconButton tooltip="Play" className="cmd-play" onClick={this.handleClick}>
                            <PlayIcon />
                        </IconButton>
                        <IconButton tooltip="Pause" className="cmd-pause" onClick={this.handleClick}>
                            <PauseIcon />
                        </IconButton>
                        <IconButton tooltip="Next" className="cmd-next" onClick={this.handleClick}>
                            <NextIcon />
                        </IconButton>
                        <IconButton tooltip="Last" className="cmd-last" onClick={this.handleClick}>
                            <ForwardIcon />
                        </IconButton>
                    </div>
                </div>
            </MuiThemeProvider >
        );
    }
}

export default connect()(PresentationNavigation);