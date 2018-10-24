import React from 'react';
import './Main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import BrowserContentPanel from '../browseContentPanel/containers/browserContentPanel'
import Slid from '../common/slid/containers/Slid'

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentMap: contentMapTmp,
        }
    }

    render() {
        return (

            <div className='container-fluid height-100'>
                <div className="row height-100">
                    <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                    </div>
                    <div className='col-md-6 col-lg-6 height-100'>
                    <Slid id={1} title={"This is my first slide"} txt={"Play that funky music"} content_id={2} displayMode={"SHORT"} content={this.state.contentMap}></Slid>
                    <Slid id={1} title={"This is another slide"} txt={"Cooking MCs like a pound of bacon"} content_id={2} displayMode={"FULL_MNG"} content={this.state.contentMap}></Slid>
                    </div>
                    <div className='col-md-3 col-lg-3 height-100'>
                        <BrowserContentPanel content={this.state.contentMap} ></BrowserContentPanel>
                    </div>
                </div>
            </div>
        );
    }
}