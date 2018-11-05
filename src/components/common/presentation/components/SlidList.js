import React from 'react';
import Slid from '../../slid/containers/Slid'

import { connect } from 'react-redux'


class SlidList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let slids = []
        for(let slid of this.props.slidArray){
            slids.push(<Slid key={slid.id} slid={slid} contentMap={this.props.contentMap} displayMode={"SHORT"}></Slid>)
        }
        return (
            <div>
                {slids}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
        slidArray: state.updateModelReducer.presentation.slidArray
    }
}
export default connect(mapStateToProps)(SlidList);