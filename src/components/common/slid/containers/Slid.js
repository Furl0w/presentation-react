import React from 'react';
import Content from '../../content/containers/Content'
import EditMetaSlid from '../components/EditMetaSlid'

import { connect } from 'react-redux';
import { setSelectedSlid } from '../../../../actions'

class Slid extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeTxt = this.handleChangeTxt.bind(this);
        this.updateSelectedSlid = this.updateSelectedSlid.bind(this);
    }

    handleChangeTitle(e) {
        this.props.slid.title = e.target.value;
        this.props.onChange(this.props.slid)
    }

    handleChangeTxt(e) {
        this.props.slid.txt = e.target.value;
        this.props.onChange(this.props.slid)
    }

    updateSelectedSlid() {
        let tmpSlid = this.props.slid;
        this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    render() {
        if (Object.keys(this.props.contentMap).length !== 0) {
            switch (this.props.displayMode) {
                case "SHORT": return (
                    <div onClick={this.updateSelectedSlid}>
                        <h1>{this.props.slid.title}</h1>
                        <p>{this.props.slid.txt}</p>
                        <Content key={this.props.contentMap[this.props.slid.content_id].id} content={this.props.contentMap[this.props.slid.content_id]} onlyContent={true}></Content>
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
        else {
            return null
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
    }
}

export default connect(mapStateToProps)(Slid);