import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.content.id,
            src: props.content.src,
            type: props.content.type,
            title: props.content.src,
            onlyContent: false
        }
    }

    render() {
        let content
        switch (this.state.type) {
            case "img":
            case "img_url": content = <img src={this.state.src}></img>; break
            case "video": content = <object data={this.state.src}></object>; break
            case "web": content = <iframe src={this.state.src}></iframe>; break
            default: return (
                <div>
                    <h4>Unsupported content type</h4>
                </div>
            )
        }

        if (this.state.onlyContent === true) {
            return (
                <div>
                    {content}
                </div>
            );
        }
        else {
            return (
                <div>
                    {content}
                    {this.state.id}{this.state.title}{this.state.src}
                </div>
            );
        }
    }
}