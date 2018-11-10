import React from 'react';
import SlidList from '../components/SlidList'
import EditMetaPres from '../components/EditMetaPres'

import { connect } from 'react-redux'
import { updatePresentation } from '../../../../actions'


class Presentation extends React.Component {

    handleChangeTitle = (e) => {
        this.props.pres.title = e.target.value
        this.props.dispatch(updatePresentation(this.props.pres));
    }
    handleChangeDescription = (e) => {
        this.props.pres.description = e.target.value
        this.props.dispatch(updatePresentation(this.props.pres));
    }

    render() {
        console.log("p",this.props)
        if (Object.keys(this.props.contentMap).length !== 0) {
            return (
                <div>
                    <EditMetaPres title={this.props.pres.title} handleChangeTitle={this.handleChangeTitle} description={this.props.pres.description} handleChangeDescription={this.handleChangeDescription}></EditMetaPres>
                    <SlidList slidArray={this.props.pres.slidArray} contentMap={this.props.contentMap}></SlidList>
                </div>
            )
        }
        else {
            return null
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
        pres: state.updateModelReducer.presentation
    }
}
export default connect(mapStateToProps)(Presentation);