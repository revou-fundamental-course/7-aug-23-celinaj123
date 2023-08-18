const active = document.createElement(".active")
function hitungkeliling(){
    var s1 = parseFloat(document.getElementById("s1").value);
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    
        var kel = s1 + s2 + s3;
        document.getElementById("step").textContent = "K = s1 + s2 + s3";
        document.getElementById("steps").textContent = "K = " + s1 + "+" + s2 + "+" + s3;
        document.getElementById("displayarea").textContent = "K = " + kel;

}

function hitungluas(){
    var a = parseFloat(document.getElementById("a").value);
    var t = parseFloat(document.getElementById("t").value);

    var luas = 0.5 * a * t;
    document.getElementById("step2").textContent = "L = 1/2 * a * t";
    document.getElementById("steps2").textContent = "L =" + 0.5 + "*" + a + "*" + t;
    document.getElementById("displayluas").textContent = "L = " + luas;
}


function resetkel(){
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("step").textContent ="";
    document.getElementById("steps").textContent ="";
    document.getElementById("displayarea").textContent ="";
}

function resetluas(){
    document.getElementById("a").value = "";
    document.getElementById("t").value = "";
    document.getElementById("step2").textContent ="";
    document.getElementById("steps2").textContent ="";
    document.getElementById("displayluas").textContent ="";
}