import React from 'react';
import Content from '../../common/content/containers/Content'
import AddContentPanel from '../components/AddContentPanel';
import { addContent } from '../../../actions/index';

import { connect } from 'react-redux'

class browserContentPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    addContentHandler = (content) => this.props.dispatch(addContent(JSON.parse(JSON.stringify(content))));

    render() {
        let contents = []
        for (let content in this.props.contentMap) {
            contents.push(<Content key={this.props.contentMap[content].id} content={this.props.contentMap[content]} onlyContent={false}></Content>)
        }
        return (
            <div>
                {contents}
                <AddContentPanel addContentHandler={this.addContentHandler}/>
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