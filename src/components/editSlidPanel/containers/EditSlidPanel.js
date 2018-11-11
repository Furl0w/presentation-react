import React from 'react';
import Slid from '../../common/slid/containers/Slid'

import { connect } from 'react-redux'
import { updateSlid } from '../../../actions'
import PresentationNavigation from '../../common/presentation/components/PresentationNavigation';

class EditSlidPanel extends React.Component {

    updateCurrentSlid = (slid) => this.props.dispatch(updateSlid(slid));

    render() {
        let result;

        if (this.props.selected_slid) {
            result = <Slid slid={this.props.selected_slid} onChange={this.updateCurrentSlid} displayMode={"FULL_MNG"}></Slid>;
        }

        return (
            <div>
                <PresentationNavigation></PresentationNavigation>
                <div className="EditSlid">
                    {result}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {

    if (state.updateModelReducer.presentation.slidArray.find(slid => slid.id === state.selectedReducer.slid.id)) {
        return {
            selected_slid: state.selectedReducer.slid
        }
    }
    else {
        return {}
    }
}
export default connect(mapStateToProps)(EditSlidPanel);