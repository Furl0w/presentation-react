import React from 'react';
import Content from '../../common/content/containers/Content'
import AddContentPanel from '../components/AddContentPanel';
import { addContent } from '../../../actions/index';
import generateUUID from "../../../tools/tools";
import Comm from '../../../services/Comm';

import { connect } from 'react-redux'

class browserContentPanel extends React.Component {

    addContentHandler = (content) => {
        
        // In dev
        content.id = generateUUID(); 
        this.props.dispatch(addContent(JSON.parse(JSON.stringify(content))))

        // In prod
        /*
        Comm.getUUID()
            .then(data => {
                content.id = data.data.uuid;
                this.props.dispatch(addContent(JSON.parse(JSON.stringify(content))))
            })
            .catch(console.error); 
            */        
    };

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