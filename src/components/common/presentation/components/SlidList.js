import React from 'react';
import Slid from '../../slid/containers/Slid'

export default class SlidList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let slids = []
        for(let slid of this.props.slidArray){
            slids.push(<Slid slid={slid} contentMap={this.props.contentMap} displayMode={"SHORT"}></Slid>)
        }
        return (
            <div>
                {slids}
            </div>
        )
    }
}
