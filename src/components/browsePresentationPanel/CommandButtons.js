import React from 'react';
import IconButton from "material-ui/IconButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AddIcon from 'material-ui/svg-icons/av/add-to-queue';
import SaveIcon from 'material-ui/svg-icons/content/save';
import RemoveIcon from 'material-ui/svg-icons/av/remove-from-queue';


export default class CommandButtons extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="Commands">
                    <IconButton tooltip="Add" onClick={this.props.addSlid}>
                        <AddIcon color="#16a085"/>
                    </IconButton>
                    <IconButton tooltip="Save" onClick={this.props.saveSlid}>
                        <SaveIcon color="#2980b9"/>
                    </IconButton>
                    <IconButton tooltip="Remove" onClick={this.props.removeSlid}>
                        <RemoveIcon color="#e74c3c"/>
                    </IconButton>
                </div>
            </MuiThemeProvider>
        );
    }
}