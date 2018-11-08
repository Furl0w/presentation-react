import React from 'react';
import Slid from '../../slid/containers/Slid'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { connect } from 'react-redux'

const style = {
    marginRight: 20,
};


class SlidList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let slids = []
        for (let slid of this.props.slidArray) {
            slids.push(<Slid key={slid.id} slid={slid} contentMap={this.props.contentMap} displayMode={"SHORT"}></Slid>)
        }
        return (
            <div>
                <MuiThemeProvider>
                    <FloatingActionButton mini style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </MuiThemeProvider>
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