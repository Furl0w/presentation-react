import React from 'react';
import Content from '../../content/containers/Content'
import EditMetaSlid from '../components/EditMetaSlid'

export default class Slid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            txt: this.props.txt,
            content_id: this.props.content_id,
            contentMap: this.props.content,
            displayMode: this.props.displayMode
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeTxt = this.handleChangeTxt.bind(this);
    }
    handleChangeTitle(e) {
        this.setState({ title: e.target.value });
    }
    handleChangeTxt(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        switch (this.state.displayMode) {
            case "SHORT": return (
                <div>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.txt}</p>
                    <Content key={this.state.contentMap[this.state.content_id].id} content={this.state.contentMap[this.state.content_id]} onlyContent={true}></Content>
                </div>
            )
            case "FULL_MNG": return (
                <div>
                    <EditMetaSlid title={this.state.title} handleChangeTitle={this.handleChangeTitle} txt={this.state.txt} handleChangeTxt={this.handleChangeTxt}></EditMetaSlid>
                    <Content key={this.state.contentMap[this.state.content_id].id} content={this.state.contentMap[this.state.content_id]} onlyContent={true}></Content>
                </div>
            )
            default: return (
                <div>
                    <h4>Unsupported display mode</h4>
                </div>
            )
        }
    }
}