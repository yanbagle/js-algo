function loadDoc(num) {
    console.log(num);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("GET", "http://localhost:8080/api/projects/open", true);
    xhttp.setRequestHeader('Accept', 'application/json, text/javascript');
    xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhttp.send();
}

