//risolvere gli errori post:
//https://stackoverflow.com/questions/54212220/how-to-fix-access-to-xmlhttprequest-has-been-blocked-by-cors-policy-redirect-i

function calcolcainjs() {
    var input = document.getElementById("inputjs").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("risultato").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "http://api.mathjs.org/v4/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send({
        "expr": [input],
        "precision": 14
    });
}


function calcolainjq() {
    var input = $('#inputjq').val();
    document.write("ce l'hai fatta!");
    var dati = {
        expr: [input],
        precision: 14
    };

    $.ajax({
        url: 'https://api.mathjs.org',
        type: 'post',
        contenttype: 'application/json',
        data: JSON.stringify(postData),
        success: function(data, textStatus, jQxhr) { $("#risultatojq").html(data.result[0]); }
            //error: function(JQxhr, textStatus, errorThrown) { console.log(errorThrown); }
    });
}