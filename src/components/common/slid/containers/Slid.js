import React from 'react';
import Content from '../../content/containers/Content'
import EditMetaSlid from '../components/EditMetaSlid'

import { connect } from 'react-redux';
import { setSelectedSlid } from '../../../../actions'

class Slid extends React.Component {
    
    handleChangeTitle = (e, value) => {
        this.props.slid.title = value;
        this.props.onChange(this.props.slid)
    }

    handleChangeTxt = (e) => {
        this.props.slid.txt = e.currentTarget.value;
        this.props.onChange(this.props.slid)
    }

    updateSelectedSlid = () => {
        let tmpSlid = this.props.slid;
        this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    drop = function (e) {
        e.preventDefault()
        this.props.slid.content_id = e.dataTransfer.getData("text");
        this.props.onChange(this.props.slid);
    }

    dragOver = function (e) {
        e.preventDefault()
    }

    render() {

        if (Object.keys(this.props.contentMap).length !== 0) {

            switch (this.props.displayMode) {
                case "SHORT": return (
                    <div className={this.props.selected ? "SlidMenu selected" : "SlidMenu"} onClick={this.updateSelectedSlid}>
                        <h3>{this.props.slid.title}</h3>
                        <p>{this.props.slid.txt}</p>
                        <Content key={this.props.contentMap[this.props.slid.content_id].id} content={this.props.contentMap[this.props.slid.content_id]} onlyContent={true}></Content>
                    </div>
                )
                case "FULL_MNG":
                    return (
                        <div>
                            <EditMetaSlid title={this.props.slid.title} handleChangeTitle={this.handleChangeTitle} txt={this.props.slid.txt} handleChangeTxt={this.handleChangeTxt}></EditMetaSlid>
                            <div onDragOver={(e) => this.dragOver(e)} onDrop={(e) => this.drop(e)} className="droppable">
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
        contentMap: state.updateModelReducer.content_map
    }
}

export default connect(mapStateToProps)(Slid);