import React from 'react';
import Visual from '../components/Visual'

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.content
        }
    }

    render() {
        return (
            <Visual content={this.state.content}></Visual>
        )
    }
}