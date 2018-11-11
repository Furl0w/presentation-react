import React from 'react';
import SlidList from '../components/SlidList'
import EditMetaPres from '../components/EditMetaPres'
import CommandButtons from "../../../browsePresentationPanel/CommandButtons";

import { connect } from 'react-redux'
import { updatePresentation } from '../../../../actions'
import { addSlid, removeSlid, sendCommand } from "../../../../actions";
import generateUUID from "../../../../tools/tools";


class Presentation extends React.Component {

    handleChangeTitle = (e) => {
        this.props.pres.title = e.target.value
        this.props.dispatch(updatePresentation(this.props.pres));
    }
    handleChangeDescription = (e) => {
        this.props.pres.description = e.target.value
        this.props.dispatch(updatePresentation(this.props.pres));
    }

    handleAddSlid = (e) => {

        let newSlid = {
            id: generateUUID(),  // In dev;
            content_id: "62cf58dd-ecb1-495a-899c-b7c633fa1df7",
            title: "New Slide",
            txt: "Some nice content",
        };

        this.props.dispatch(addSlid(newSlid));

        // In prod
        /*
        Comm.getUUID()
            .then(data => {
                let newSlid = {
                    id: data.data.uuid
                    content_id: "",
                    title: "New Slide",
                    txt: "Some nice content"
                };

                this.props.dispatch(addSlid(newSlid));
            })
            .catch(console.error);
            */
    }

    handleDelSlid = (e) => this.props.dispatch(removeSlid(this.props.selectedSlid.id));

    handleSaveSlid = (e) => this.props.dispatch(sendCommand("CMD_SAVE"));

    render() {
        if (Object.keys(this.props.contentMap).length !== 0) {
            return (
                <div>
                    <EditMetaPres title={this.props.pres.title} handleChangeTitle={this.handleChangeTitle} description={this.props.pres.description} handleChangeDescription={this.handleChangeDescription}></EditMetaPres>
                    <CommandButtons addSlid={this.handleAddSlid} removeSlid={this.handleDelSlid} saveSlid={this.handleSaveSlid} />
                    <SlidList slidArray={this.props.pres.slidArray} contentMap={this.props.contentMap}></SlidList>
                </div>
            )
        }
        else {
            return null
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
        pres: state.updateModelReducer.presentation,
        selectedSlid: state.selectedReducer.slid
    }
}

export default connect(mapStateToProps)(Presentation);