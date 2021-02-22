function calcolcainjs(){
    var input = document.getElementById("inputjs").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("risultato").innerHTML = this.responseText;
        }
      };
    xhttp.open("POST", "http://api.mathjs.org/v4/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
    xhttp.send({
            "expr": [input],
            "precision": 14
    });



}