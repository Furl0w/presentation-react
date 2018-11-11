import React from 'react';
import './editMetaSlid.css'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { connect } from 'react-redux'


class EditMetaSlid extends React.Component {
    
    render() {
        return (
            <MuiThemeProvider>
                <div className="form-group">
                    <TextField
                        id="currentSlideTitle"
                        floatingLabelText="Slide title"
                        onChange={this.props.handleChangeTitle}
                        value={this.props.title}
                        fullWidth
                    ></TextField>
                    <br />
                    <label htmlFor="currentSlideText">Text</label>
                    <textarea
                        rows="5"
                        type="text"
                        className="form-control"
                        id="currentSlideText"
                        onChange={this.props.handleChangeTxt}
                        value={this.props.txt}>
                    </textarea>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.selectedReducer.slid.title,
        txt: state.selectedReducer.slid.txt
    }
}
export default connect(mapStateToProps)(EditMetaSlid);