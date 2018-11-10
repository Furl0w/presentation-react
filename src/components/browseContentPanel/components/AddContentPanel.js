import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};


export default class AddContentPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            type: "image",
            src: "",
            open: false
        }
    }

    handleOpen = () => this.setState({ open: true });

    addContent = () => {
        let a  = {
            title: this.state.title,
            type: this.state.type,
            src: this.state.src
        }

        console.log("adding contenta",a)

        this.props.addContentHandler(a);
        this.resetState();
        this.close();
    };

    close = () => this.setState({ open: false });
    resetState(){
        this.setState({title: ""});
        this.setState({type: "image"});
        this.setState({src: ""});
    }

    handleChange = (event, index, value) => this.setState({type: value});
    handleChangeTitle = (event, value) => this.setState({title: value});
    handleChangeURL = (event, value) => this.setState({src: value});
    

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.close}
            />,
            <FlatButton
                label="Add"
                primary={true}
                //disabled={true}
                onClick={this.addContent}
            />,
        ];

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <FloatingActionButton mini style={style} onClick={this.handleOpen}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <Dialog
                            title="Add a new content"
                            actions={actions}
                            modal={true}
                            open={this.state.open}
                        >

                            <TextField
                                id="title"
                                floatingLabelText="Title"
                                value={this.state.title}
                                onChange={this.handleChangeTitle}
                            ></TextField>

                            <br/>

                            <SelectField
                                floatingLabelText="Content Type"
                                value={this.state.type}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={"img"} primaryText="image" />
                                <MenuItem value={"img_url"} primaryText="image URL" />
                                <MenuItem value={"video"} primaryText="video" />
                                <MenuItem value={"web"} primaryText="web" />
                            </SelectField>
                            
                            <br/>

                            <TextField
                                id="src"
                                floatingLabelText="Location"
                                value={this.state.src}
                                onChange={this.handleChangeURL}
                            ></TextField>

                        </Dialog>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}