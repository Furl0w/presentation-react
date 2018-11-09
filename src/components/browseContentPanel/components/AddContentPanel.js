import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AddContentPanel extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <FloatingActionButton mini style={style} onClick={this.handleOpen}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <Dialog
                            title="Dialog With Actions"
                            actions={actions}
                            modal={true}
                            open={this.state.open}
                        >
                            Only actions can close this dialog.
                        </Dialog>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}