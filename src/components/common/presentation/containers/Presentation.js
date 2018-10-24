import React from 'react';
import SlidList from '../components/SlidList'
import EditMetaPres from '../components/EditMetaPres'

export default class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.pres.id,
            title:this.props.pres.title,
            description:this.props.pres.description,
            slidArray:this.props.slidArray,
            contentMap:this.props.contentMap
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({ title: e.target.value });
    }
    handleChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    render() {
        return(
            <div>
                <EditMetaPres title={this.state.title} handleChangeTitle={this.handleChangeTitle} description={this.state.description} handleChangeDescription={this.handleChangeDescription}></EditMetaPres>
                <SlidList slidArray={this.state.slidArray} contentMap={this.state.contentMap}></SlidList>
            </div>
        )
    }
}