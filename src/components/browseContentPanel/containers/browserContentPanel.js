import React from 'react';
import Content from '../../common/content/containers/Content'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { connect } from 'react-redux'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class browserContentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let contents = []
        for (let content in this.props.contentMap) {
            contents.push(<Content key={this.props.contentMap[content].id} content={this.props.contentMap[content]} onlyContent={false}></Content>)
        }
        return (
            <div>
                {contents}
                <MuiThemeProvider>
                    <FloatingActionButton mini style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </MuiThemeProvider>
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map
    }
}
export default connect(mapStateToProps)(browserContentPanel);