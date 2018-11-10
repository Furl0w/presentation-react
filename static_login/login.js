document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tryLogin").addEventListener("click", tryLogin);
});

function tryLogin() {
    let user = document.getElementById('username').value
    let password = document.getElementById('password').value
    if (user === "" || password === "") {
        document.getElementById("errorMessage").style.display = "inline";
    }
    else {
        document.getElementById("errorMessage").style.display = "none";
        credentials = JSON.stringify({ user: user, password: password })
        postRequest(credentials, 'http://localhost:1337/login', (e, data) => {
            console.log("e : " + e)
            console.log("data : " +data)
            if(e !== null){
                document.getElementById("wrongLogin").style.display = "inline";
            }
            else {
                window.location.href = "http://localhost:1337/admin"
            }
        })
    }
}

function postRequest(obj, url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        console.log(this.status)
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            cb(null, this.response)
        }
        else {
            cb(this.response)
        }
    }
    xhr.send(obj);
}