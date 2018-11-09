import React from 'react';
import Content from '../../common/content/containers/Content'
import AddContentPanel from '../components/AddContentPanel';

import { connect } from 'react-redux'

class browserContentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    showAddDialog = function() {

    }

    render() {
        let contents = []
        for (let content in this.props.contentMap) {
            contents.push(<Content key={this.props.contentMap[content].id} content={this.props.contentMap[content]} onlyContent={false}></Content>)
        }
        return (
            <div>
                {contents}
                <AddContentPanel/>
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map
    }
}
export default connect(mapStateToProps)(browserContentPanel);