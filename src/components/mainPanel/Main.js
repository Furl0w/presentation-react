import React from 'react';
import './Main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import BrowserContentPanel from '../browseContentPanel/containers/browserContentPanel'
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel'
import Presentation from '../common/presentation/containers/Presentation'
import Comm from '../../services/Comm'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { updateContentMap, updatePresentation } from '../../actions'
import globalReducer from '../../reducers';

const store = createStore(globalReducer);

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        // var comm = new Comm()
        // comm.loadPres("efa0a79a-2f20-4e97-b0b7-71f824bfe349", pres => store.dispatch(updatePresentation(pres)), e => console.error(e))
        // comm.loadContent(contentMapTmp => store.dispatch(updateContentMap(contentMapTmp)), e => console.error(e))

        let pres = 
        {
            "id": "efa0a79a-2f20-4e97-b0b7-71f824bfe349",
                "title": "nototo",
                    "description": "Welcome to this first présentation do you need some help?",
                        "slidArray": [
                            {
                                "id": "c5c35356-1347-457d-af6b-e3d40862c1e0",
                                "title": "slid1 - baxter data for ever",
                                "txt": "The majority of sources for Odysseus' pre-war exploits—principally the mythographers Pseudo-Apollodorus and Hyginus—postdate Homer by many centuries. Two stories in particular are well known: When Helen was abducted, Menelaus called upon the other suitors to honour their oaths and help him to retrieve her, an attempt that would lead to the Trojan War.  TT",
                                "content_id": "62cf58dd-ecb1-495a-899c-b7c633fa1df7"
                            },
                            {
                                "id": "ba5bd952-2688-46b8-9b01-33723e1e0cbd",
                                "title": "slid2 -0123465679",
                                "txt": "nothing to docvwcxv",
                                "content_id": "62cf58dd-ecb1-495a-899c-b7c633fa1df7"
                            },
                            {
                                "id": "df17779e-6acf-4787-9066-41e94da5c1db",
                                "title": "info about the world",
                                "txt": "yesy some text here",
                                "content_id": "62cf58dd-ecb1-495a-899c-b7c633fa1df7"
                            },
                            {
                                "id": "d561c71c-746c-41c5-9196-e56f75b5e94f",
                                "title": "More than a simple presenter",
                                "txt": "This is a EC Stratocaster",
                                "content_id": "62cf58dd-ecb1-495a-899c-b7c633fa1df7"
                            }
                        ]
        }
        store.dispatch(updatePresentation(pres));

        let contentMapTmp =
        {
            "62cf58dd-ecb1-495a-899c-b7c633fa1df7": {
                "type": "img",
                "id": "62cf58dd-ecb1-495a-899c-b7c633fa1df7",
                "title": "Lego",
                "fileName": "62cf58dd-ecb1-495a-899c-b7c633fa1df7.jpg",
                "src": "https://i.imgur.com/SBUbHHN.gif"
            },
            "d4c257c5-7c67-46dc-bcf5-3c896bcd57f7": {
                "type": "img",
                "id": "d4c257c5-7c67-46dc-bcf5-3c896bcd57f7",
                "title": "Nao",
                "fileName": "d4c257c5-7c67-46dc-bcf5-3c896bcd57f7.png",
                "src": "https://i.imgur.com/SBUbHHN.gif"
            },
            "e336147f-e6e1-42a7-9766-e9a9dc34ceef": {
                "type": "video",
                "id": "e336147f-e6e1-42a7-9766-e9a9dc34ceef",
                "title": "test url",
                "fileName": null,
                "src": "https://www.youtube.com/watch?v=fAVCSU9vrvY"
            },
            "ece434fe-9e86-4231-ae1d-3236e2d3e415": {
                "type": "img",
                "id": "ece434fe-9e86-4231-ae1d-3236e2d3e415",
                "title": "Strat",
                "fileName": "ece434fe-9e86-4231-ae1d-3236e2d3e415.png",
                "src": "https://i.imgur.com/SBUbHHN.gif"
            },
            "fdc95b61-ca46-4ac5-9372-b847c630faaf": {
                "type": "video",
                "id": "fdc95b61-ca46-4ac5-9372-b847c630faaf",
                "title": "test url",
                "fileName": null,
                "src": "https://www.youtube.com/watch?v=fAVCSU9vrvY"
            }
        }
        store.dispatch(updateContentMap(contentMapTmp));
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