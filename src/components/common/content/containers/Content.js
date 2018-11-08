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

    drag = function (e) {
        e.dataTransfer.setData("text", e.target.id);
    }

    render() {
        return (
            /* <div draggable="true" onDragStart={(e) => this.onDragStart(e, t.name)}> */
                <Visual content={this.state.content} onlyContent={this.state.onlyContent}></Visual>
            /* </div> */
        )
    }
}