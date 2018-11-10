import React from 'react';

export default class Visual extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.content.id,
            src: props.content.src,
            type: props.content.type,
            title: props.content.src,
            onlyContent: props.onlyContent
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
                    <b>Unsupported content type</b>
                </div>
            )
        }

        if (this.state.onlyContent === true) {
            return (
                <div className="SlidContent">
                    {content}
                </div>
            );
        }
        else {
            return (
                <div className="SlidContent">
                    {content}
                    <div>
                        <p className="SlidId">{this.state.id}</p>
                        <p className="SlidId">{this.state.src}</p>
                        <p>{this.state.title}</p>
                    </div>
                </div>
            );
        }
    }
}