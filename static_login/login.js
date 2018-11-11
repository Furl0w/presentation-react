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
        credentials = JSON.stringify({ login: user, pwd: password })
        postRequest(credentials, 'http://localhost:1337/login', (e, data) => {
            if (e !== null) {
                document.getElementById("wrongLogin").style.display = "inline";
            }
            else {
                data = JSON.parse(data)
                if(data.role  === "Admin"){
                    window.location.href = "http://localhost:1337/admin"
                }
                if(data.role === "User"){
                    window.location.href = "http://localhost:1337/watch"
                }
            }
        })
    }
}

function postRequest(obj, url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            cb(null, this.response)
        }
        else {
            cb(this.response)
        }
    }
    xhr.send(obj);
}