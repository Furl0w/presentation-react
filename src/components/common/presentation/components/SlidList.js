import React from 'react';
import Slid from '../../slid/containers/Slid'

import { connect } from 'react-redux'

class SlidList extends React.Component {

    render() {
        if (this.props.slidArray) {

            let slids = [];
            for (let slid of this.props.slidArray) {
                let selected = this.props.selSlidID && slid.id === this.props.selSlidID;
                slids.push(<Slid key={slid.id} slid={slid} contentMap={this.props.contentMap} displayMode={"SHORT"} selected={selected}></Slid>)
            }
            return (
                <div>
                    {slids}
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
        slidArray: state.updateModelReducer.presentation.slidArray,
        selSlidID: state.selectedReducer.slid.id
    }
}
export default connect(mapStateToProps)(SlidList);