import React from 'react';
import Content from '../../common/content/containers/Content'

export default class browserContentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMap: this.props.content
        }
    }

    render() {
        let contents = []
        for (let content in this.state.contentMap) {
            contents.push(<Content key={this.state.contentMap[content].id} content={this.state.contentMap[content]} onlyContent={false}></Content>)
        }
        return (<div>{contents}</div>);
            
    }
}