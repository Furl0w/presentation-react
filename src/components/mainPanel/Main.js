import React from 'react';

import './Main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import BrowserContentPanel from '../browseContentPanel/containers/browserContentPanel';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel'
import Comm from '../../services/Comm'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { updateContentMap, updatePresentation, addContent, sendCommand, setSelectedSlid } from '../../actions'
import globalReducer from '../../reducers';
import BrowsePresentationPanel from '../browsePresentationPanel/browsePresentationPanel';

const store = createStore(globalReducer);

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentMap: {},
            currentPres: {}
        }

        // create the sokect connection between the server and the web browser
        this.comm = new Comm();
        this.comm.socketConnection("test");
        this.comm.loadPres("efa0a79a-2f20-4e97-b0b7-71f824bfe349", (pres) => store.dispatch(updatePresentation(pres)), console.error);
        this.comm.loadContent(contentMapTmp => store.dispatch(updateContentMap(contentMapTmp)), console.error);

        store.subscribe(() => {
            let storeState = store.getState();


            let cmdPres = storeState.commandReducer.cmdPres,
                params = storeState.commandReducer.params,
                crtSlid = storeState.selectedReducer.slid,
                slidArray = storeState.updateModelReducer.presentation.slidArray;

            switch (cmdPres) {
                case 'CMD_SAVE':
                    this.comm.savPres(storeState.updateModelReducer.presentation, console.error);
                    break;

                case 'cmd-prev':
                    let prevPos = slidArray.findIndex(slid => slid.id === crtSlid.id);

                    if (prevPos > 0) {
                        let nextSlid = slidArray[prevPos - 1]
                        this.comm.emit(nextSlid);
                        store.dispatch(sendCommand(''));
                        store.dispatch(setSelectedSlid(nextSlid));
                    }
                    else {
                        store.dispatch(sendCommand(''));
                    }
                    break;

                case 'cmd-next':
                    let pos = slidArray.findIndex(slid => slid.id === crtSlid.id);
                    if (pos < slidArray.length - 1) {
                        let nextSlid = slidArray[pos + 1]
                        this.comm.emit(nextSlid);
                        store.dispatch(sendCommand(''));
                        store.dispatch(setSelectedSlid(nextSlid));
                    }
                    else {
                        store.dispatch(sendCommand(''));
                    }
                    break;

                case 'cmd-play':
                    this.comm.emit(crtSlid);
                    store.dispatch(sendCommand(''));
                    break;

                case 'cmd-pause':
                    //this.comm.pause()
                    break;

                case 'cmd-first':
                    if (slidArray.length > 0) {
                        let nextSlid = slidArray[0]
                        this.comm.emit(nextSlid);
                        store.dispatch(sendCommand(''));
                        store.dispatch(setSelectedSlid(nextSlid));
                    }
                    else {
                        store.dispatch(sendCommand(''));
                    }
                    break;

                case 'cmd-last':
                    if (slidArray.length > 0) {
                        let nextSlid = slidArray[slidArray.length-1]
                        this.comm.emit(nextSlid);
                        store.dispatch(sendCommand(''));
                        store.dispatch(setSelectedSlid(nextSlid));
                    }
                    else {
                        store.dispatch(sendCommand(''));
                    }
                    break;

                case 'save-content':
                    if (params) {
                        this.comm.savContent(params, (data) => {
                            let content = { ...params, id: data.data.uuid };
                            store.dispatch(sendCommand('CMD_SAVE'));
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