import React from 'react';
import Slid from '../../common/slid/containers/Slid'

import { connect } from 'react-redux'
import { updateSlid } from '../../../actions'
import PresentationNavigation from '../../common/presentation/components/PresentationNavigation';

class EditSlidPanel extends React.Component {
    constructor(props) {
        super(props);
        this.updateCurrentSlid = this.updateCurrentSlid.bind(this);
    }

    updateCurrentSlid(slid) {
        this.props.dispatch(updateSlid(slid));
    }

    render() {
        let result;

        if (Object.keys(this.props.selected_slid).length !== 0) {
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
    return {
        selected_slid: state.selectedReducer.slid
    }
}
export default connect(mapStateToProps)(EditSlidPanel);