function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("GET", "https://giphy.com/gifs/justintimberlake-justin-timberlake-man-of-the-woods-3o7WIFL3Fj8qXgemsM", true);
    xhttp.setRequestHeader('Accept', 'application/json, text/javascript');
    xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhttp.send();
}

loadDoc();