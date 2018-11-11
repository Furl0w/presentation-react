var io = require('socket.io-client');
var axios = require('axios');

const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

class Comm {
    constructor() {
        this.comm = {};
        this.comm.io = {};
        this.socket = "";

    }

    toString = () => {
        return '';
    }

    static getUUID() {
        return axios.get('/uuid');
    }

    loadPres = (presId, callback, callbackErr) => {
        axios.get('/loadPres')
            .then(function (data) {
                var size = Object.keys(data.data).length;
                console.log("raw data", data.data);
                let loadedPres = ""
                if (size > 0) {
                    console.log("key", Object.keys(data.data)[0]);
                    console.log("data", data.data[Object.keys(data.data)[0]]);
                    loadedPres = data.data[Object.keys(data.data)[0]];
                }
                callback(loadedPres);
            })
            .catch(function (error) {
                callbackErr(error);
            });

    }

    loadContent = (callback, callbackErr) => {
        axios.get('/contents')
            .then(function (data) {
                //console.log("raw content data");
                //console.log(data.data);
                var size = Object.keys(data.data).length;
                let contentMap = {}
                for (var i = 0; i < size; i++) {
                    let c_obj = data.data[Object.keys(data.data)[i]];
                    contentMap[c_obj.id] = c_obj;
                    // console.log(c_obj);
                }

                callback(contentMap);
            })
            .catch(function (error) {
                callbackErr(error);
            });

    }

    savPres = (presJson, callbackErr) => {
        axios.post('/savePres', presJson)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                callbackErr(error);
            });
    }

    savContent = (contentJson, callback, callbackErr) => {
        let formData = new FormData();
        formData.set('title', contentJson.title)
        formData.set('type', contentJson.type)
        formData.set('src', contentJson.src)
        //formData.append('file', imageFile); 

        axios.post('/contents', formData, config)
            .then(function (response) {
                console.log("saved content response", response);
                callback(response);
            })
            .catch(function (error) {
                callbackErr(error);
            });
    }

    fileUpload = (fileC, callback, callbackErr) => {
        var data = new FormData();
        data.append('file', fileC);
        axios.post('/file-upload', data)
            .then(function (response) {
                console.log(response);
                callback();
            })
            .catch(function (error) {
                callbackErr(error);
            });

    }

    emitOnConnect = (message) => {
        console.log("message", message);
        console.log("socket", this.socket);
        console.log("this.comm.io.uuid", this.comm.io.uuid);
        this.socket.emit('data_comm', { 'id': this.comm.io.uuid }, function (test) {
            console.log("emitOnConnect", test);
        });
    }

    socketConnection = (uuid) => {
        this.socket = io.connect(process.env.SOCKET_URL);
        this.comm.io.uuid = uuid;
        this.socket.on('connection', message => this.emitOnConnect(message));

        this.socket.on('newPres', function (socket) {

        });
        this.socket.on('slidEvent', function (socket) {

        });
    }

    backward = () => {
        this.socket.emit('slidEvent', { 'CMD': "PREV" });
    }

    forward = () => {
        this.socket.emit('slidEvent', { 'CMD': "NEXT" });
    }

    play = (presUUID) => {
        this.socket.emit('slidEvent', { 'CMD': "START", 'PRES_ID': presUUID });
    }

    pause = () => {
        this.socket.emit('slidEvent', { 'CMD': "PAUSE" });
    }

    begin = () => {
        this.socket.emit('slidEvent', { 'CMD': "BEGIN" });
    }

    end = () => {
        this.socket.emit('slidEvent', { 'CMD': "END" });
    }

}

module.exports = Comm;
