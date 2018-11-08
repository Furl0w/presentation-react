import React from 'react';
import './Main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import BrowserContentPanel from '../browseContentPanel/containers/browserContentPanel'
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel'
import Presentation from '../common/presentation/containers/Presentation'
import { Comm } from '../../services'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { updateContentMap, updatePresentation } from '../../actions'
import globalReducer from '../../reducers';

const store = createStore(globalReducer);

export default class Main extends React.Component {
    constructor(props) {
        super(props);
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
        let pres = {
            id: 1,
            title: "This is my presentation",
            description: "His palms are sweaty, knees weak, arms are heavy",
            slidArray: [slid1, slid2]
        }
        Comm.loadPres("efa0a79a-2f20-4e97-b0b7-71f824bfe349", (pres) => store.dispatch(updateContentMap(contentMapTmp)), (e) => console.log(e))
        Comm.loadContent((contentMapTmp) => store.dispatch(updateContentMap(contentMapTmp)), (e) => console.log(e))
    }

    render() {
        return (
            <Provider store={store} >
                <div className='container-fluid height-100'>
                    <div className="row height-100">
                        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                            <Presentation></Presentation>
                        </div>
                        <div className='col-md-6 col-lg-6 height-100'>
                            <EditSlidPanel></EditSlidPanel>
                        </div>
                        <div className='col-md-3 col-lg-3 height-100'>
                            <BrowserContentPanel></BrowserContentPanel>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}