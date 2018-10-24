import React from 'react';
import './Main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import BrowserContentPanel from '../browseContentPanel/containers/browserContentPanel'
import Slid from '../common/slid/containers/Slid'
import Presentation from '../common/presentation/containers/Presentation'

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentMap: contentMapTmp,
        }
    }

    render() {
        let slid1 = {
            id: 1,
            title: "This is my first slide",
            txt: "Play that funky music",
            content_id: 2
        }
        let slid2 = {
            id: 2,
            title: "This is my second slide",
            txt: "Ice Ice Baby",
            content_id: 2
        }
        let slidArray = [slid1,slid2]
        let pres = {
            id:1,
            title: "This is my presentation",
            description: "His palms are sweaty, knees weak, arms are heavy"
        }
        return (

            <div className='container-fluid height-100'>
                <div className="row height-100">
                    <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                        <Presentation pres={pres} slidArray={slidArray} contentMap={this.state.contentMap}></Presentation>
                    </div>
                    <div className='col-md-6 col-lg-6 height-100'>
                        <Slid slid={slid1} displayMode={"SHORT"} contentMap={this.state.contentMap}></Slid>
                        <Slid slid={slid2} displayMode={"FULL_MNG"} contentMap={this.state.contentMap}></Slid>
                    </div>
                    <div className='col-md-3 col-lg-3 height-100'>
                        <BrowserContentPanel content={this.state.contentMap} ></BrowserContentPanel>
                    </div>
                </div>
            </div>
        );
    }
}