import React from 'react';
import Content from '../../content/containers/Content'
import EditMetaSlid from '../components/EditMetaSlid'

import {connect} from 'react-redux';
import {setSelectedSlid} from '../../../../actions'

class Slid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.slid.id,
            title: this.props.slid.title,
            txt: this.props.slid.txt,
            content_id: this.props.slid.content_id,
            contentMap: this.props.contentMap,
            displayMode: this.props.displayMode
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeTxt = this.handleChangeTxt.bind(this);
        this.updateSelectedSlid = this.updateSelectedSlid.bind(this);
    }
    handleChangeTitle(e) {
        this.setState({ title: e.target.value });
    }
    handleChangeTxt(e) {
        this.setState({ txt: e.target.value });
    }
    updateSelectedSlid() {
        let tmpSlid = this.props.slid;
        this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    render() {
        switch (this.state.displayMode) {
            case "SHORT": return (
                <div onClick={this.updateSelectedSlid}>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.txt}</p>
                    <Content key={this.state.contentMap[this.state.content_id].id} content={this.state.contentMap[this.state.content_id]} onlyContent={true}></Content>
                </div>
            )
            case "FULL_MNG": return (
                <div>
                    <EditMetaSlid title={this.props.slid.title} handleChangeTitle={this.handleChangeTitle} txt={this.props.slid.txt} handleChangeTxt={this.handleChangeTxt}></EditMetaSlid>
                    <Content key={this.props.contentMap[this.props.slid.content_id].id} content={this.props.contentMap[this.props.slid.content_id]} onlyContent={true}></Content>
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

export default connect() (Slid);