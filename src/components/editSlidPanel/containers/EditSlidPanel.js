import React from 'react';
import Slid from '../../common/slid/containers/Slid'

import { connect } from 'react-redux'

class EditSlidPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_slid: this.props.selected_slid,
            contentMap: this.props.contentMap
        }
    }

    render() {
        if (Object.keys(this.props.selected_slid).length !== 0) {
            return <Slid slid={this.props.selected_slid} contentMap={this.props.contentMap} displayMode={"FULL_MNG"}></Slid>
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