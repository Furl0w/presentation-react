import React from 'react';
import './editMetaPres.css'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { connect } from 'react-redux'


class EditMetaPres extends React.Component {
    
    render() {
        return (
            <MuiThemeProvider>
                <div className="form-group">
                    <TextField
                        id="currentPresTitle"
                        floatingLabelText="Presentation title"
                        onChange={this.props.handleChangeTitle}
                        value={this.props.title}
                    ></TextField>
                    <br/>
                    <label htmlFor="currentPresText">Description</label>
                    <textarea
                        rows="5"
                        type="text"
                        className="form-control"
                        id="currentPresText"
                        onChange={this.props.handleChangeDescription}
                        value={this.props.description}>
                    </textarea>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.updateModelReducer.presentation.title,
        description: state.updateModelReducer.presentation.description
    }
}
export default connect(mapStateToProps)(EditMetaPres);