import React from 'react';
import { connect } from 'react-redux'
import Presentation from '../common/presentation/containers/Presentation'
import CommandButtons from "./CommandButtons";


class browsePresentationPanel extends React.Component {

    render() {
        return (
            <div>
                <CommandButtons></CommandButtons>
                <Presentation></Presentation>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
        pres: state.updateModelReducer.presentation
    }
}

export default connect(mapStateToProps)(browsePresentationPanel);