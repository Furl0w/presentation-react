import React from 'react';
import Slid from '../../common/slid/containers/Slid'

import { connect } from 'react-redux'
import { updateSlid } from '../../../actions'

class EditSlidPanel extends React.Component {
    constructor(props) {
        super(props);
        this.updateCurrentSlid = this.updateCurrentSlid.bind(this);
    }

    updateCurrentSlid(slid) {
        this.props.dispatch(updateSlid(slid));
    }

    render() {
        if (Object.keys(this.props.selected_slid).length !== 0) {
            return <Slid slid={this.props.selected_slid} onChange={this.updateCurrentSlid} displayMode={"FULL_MNG"}></Slid>
        }
        else {
            return null
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        selected_slid: state.selectedReducer.slid
    }
}
export default connect(mapStateToProps)(EditSlidPanel);