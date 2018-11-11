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

    drag = function (e, content) {
        e.dataTransfer.setData("text/plain", content.id);
    }

    render() {
        return (
            <div draggable="true" onDragStart={(e) => this.drag(e, this.state.content)}>
                <Visual content={this.state.content} onlyContent={this.state.onlyContent}></Visual>
            </div>
        )
    }
}