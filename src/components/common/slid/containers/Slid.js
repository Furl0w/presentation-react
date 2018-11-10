import React from 'react';
import Content from '../../content/containers/Content'
import EditMetaSlid from '../components/EditMetaSlid'

import { connect } from 'react-redux';
import { setSelectedSlid, updateDraggedElt } from '../../../../actions'

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

    drop = function(e) {
        e.preventDefault()
        this.props.dispatch(updateDraggedElt(e.dataTransfer.getData("text")));
    }

    dragOver = function(e) {
        e.preventDefault()
    }

    render() {
        if (Object.keys(this.props.contentMap).length !== 0) {
            switch (this.props.displayMode) {
                case "SHORT": return (
                    <div className="SlidMenu" onClick={this.updateSelectedSlid}>
                        <h3>{this.props.slid.title}</h3>
                        <p>{this.props.slid.txt}</p>
                        <Content key={this.props.contentMap[this.props.slid.content_id].id} content={this.props.contentMap[this.props.slid.content_id]} onlyContent={true}></Content>
                    </div>
                )
                case "FULL_MNG": return (
                    <div>
                        <EditMetaSlid title={this.props.slid.title} handleChangeTitle={this.handleChangeTitle} txt={this.props.slid.txt} handleChangeTxt={this.handleChangeTxt}></EditMetaSlid>
                        <div onDragOver={(e) => this.dragOver(e)} onDrop={(e) => this.drop(e, "complete")} className="droppable">
                            <Content key={this.props.contentMap[this.props.slid.content_id].id} content={this.props.contentMap[this.props.slid.content_id]} onlyContent={true}></Content>
                        </div>
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