import React from 'react';

import './Main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import BrowserContentPanel from '../browseContentPanel/containers/browserContentPanel';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel'
import Comm from '../../services/Comm'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { updateContentMap, updatePresentation, addContent, sendCommand } from '../../actions'
import globalReducer from '../../reducers';
import BrowsePresentationPanel from '../browsePresentationPanel/browsePresentationPanel';

const store = createStore(globalReducer);

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.comm = new Comm();
        this.state = {
            contentMap: {},
            currentPres: {}
        }

        // create the sokect connection between the server and the web browser
        this.comm.socketConnection("test");
        this.comm.loadPres("efa0a79a-2f20-4e97-b0b7-71f824bfe349", (pres) => store.dispatch(updatePresentation(pres)), console.error);
        this.comm.loadContent(contentMapTmp => store.dispatch(updateContentMap(contentMapTmp)), console.error);

        /*
        let contentMapTmp =
        {
            "62cf58dd-ecb1-495a-899c-b7c633fa1df7": {
                "type": "img",
                "id": "62cf58dd-ecb1-495a-899c-b7c633fa1df7",
                "title": "Lego",
                "fileName": "62cf58dd-ecb1-495a-899c-b7c633fa1df7.jpg",
                "src": "https://i.imgur.com/SBUbHHN.gif"
            },
            "e336147f-e6e1-42a7-9766-e9a9dc34ceef": {
                "type": "video",
                "id": "e336147f-e6e1-42a7-9766-e9a9dc34ceef",
                "title": "test url",
                "fileName": null,
                "src": "https://www.youtube.com/watch?v=fAVCSU9vrvY"
            }
        }
        store.dispatch(updateContentMap(contentMapTmp));

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
                    "content_id": "e336147f-e6e1-42a7-9766-e9a9dc34ceef"
                }
            ]
        }
        store.dispatch(updatePresentation(pres));
*/

        store.subscribe(() => {
            let storeState = store.getState();

            this.setState({
                presentation: storeState.updateModelReducer.presentation,
                contentMap: storeState.updateModelReducer.content_map,                
            });

            let cmdPres = storeState.commandReducer.cmdPres,
                params = storeState.commandReducer.params;

            switch (cmdPres) {
                case 'CMD_SAVE':
                    this.comm.savPres(storeState.updateModelReducer.presentation, console.error);
                    break;

                case 'cmd-prev':
                    this.comm.backward()
                    break;

                case 'cmd-next':
                    this.comm.forward()
                    break;

                case 'cmd-play':
                    this.comm.play(storeState.updateModelReducer.presentation.id)
                    break;

                case 'cmd-pause':
                    this.comm.pause()
                    break;

                case 'cmd-first':
                    this.comm.begin()
                    break;

                case 'cmd-last':
                    this.comm.end()
                    break;

                case 'save-content':
                    console.log(cmdPres, params)
                    if (params) {
                        this.comm.savContent(params, (data) => {
                            let content = { ...params, id: data.data.uuid };
                            store.dispatch(sendCommand(''));    // Need to set cmdPres to null
                            store.dispatch(addContent(content))
                        });
                    }
                    break;

                default: break;
            }
        });
    }

    render() {
        return (
            <Provider store={store} >
                <div className='container-fluid height-100'>
                    <div className="row height-100">
                        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                            <BrowsePresentationPanel></BrowsePresentationPanel>
                        </div>
                        <div className='col-md-6 col-lg-6 height-100'>
                            <EditSlidPanel ></EditSlidPanel>
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