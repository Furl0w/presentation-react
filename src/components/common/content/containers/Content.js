import React from 'react';
import Visual from '../components/Visual'

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.content,
            onlyContent: this.props.onlyContent
        }
    }

    render() {
        return (
            <Visual content={this.state.content} onlyContent={this.state.onlyContent}></Visual>
        )
    }
}