import React from 'react';
import { connect } from 'react-redux'
import Presentation from '../common/presentation/containers/Presentation'


export default class browsePresentationPanel extends React.Component {

    render() {
        return (
            <div>
                <Presentation></Presentation>
            </div>
        )
    }
}