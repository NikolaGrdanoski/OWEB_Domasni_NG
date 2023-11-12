let ind;
let izbranZbor;
var maskiran;
var tocen;
var obidi;

let zborovi = ["Strana", "Funkcija", "Spotify", "Izdavac", "Advokat", "Inovacii", "Netflix", "Amazon", "Telefon", "Zbor", "Nastan", "Market", "Kniga", "Banana", "Krusa", "Tesla", "Firma", "Ured", "Struja", "Kapetan"];

function start() {
    var genbutton = document.getElementById("generateButton");
    genbutton.addEventListener("click", generate, false);
    var guessbutton = document.getElementById("guessbutton");
    guessbutton.addEventListener("click", guess, false);

}

function generate() {
    obidi = 5;
    ind = Math.floor((Math.random() * 20));
    izbranZbor = zborovi[ind];
    maskiran = izbranZbor.split('');

    var j;
    var broj = izbranZbor.length - 3;
    var count = 0;

    while(count < broj) {
        j = Math.floor(Math.random()*izbranZbor.length);
        if(maskiran[j] !== ' _ ') {
            maskiran[j] = ' _ ';
            count++;
        } 
    }
    maskiran = maskiran.join("");
    
    var div = document.getElementById("divWord");
    div.innerHTML = "<p>" + maskiran + "</p>";

    var div1 = document.getElementById("rezultat");
    div1.innerHTML = "";
}

function guess() {
    var div = document.getElementById("rezultat");
    var val = document.getElementById("guess");

    tocen = val.value;
    if(tocen == "")
        return;
    else if(tocen == izbranZbor) {
        window.alert("Tocen zbor");
        val.value = "";
        novobid();
    }
    else {
        --obidi;
        if(obidi>0) {
            div.innerHTML = "Netocno. Ostanati obidi: " + obidi;
            val.value = "";
        }
        else {
            window.alert("Zborot ne e pogoden");
            div.innerHTML = "Tocniot zbor e " + izbranZbor;
            val.value = "";
            novobid();
        }
    }

}

function novobid() {
    var element = document.forms[0];
    var newgamediv = document.createElement("div");
    newgamediv.id = "newgameid"

    var newgamebutton = document.createElement("input");
    element.appendChild(newgamediv);
    newgamediv.appendChild(newgamebutton);

    newgamebutton.type = "button";
    newgamebutton.value = "Nov obid";
    newgamebutton.id = "ngbid";

    newgamebutton.addEventListener("click", reset, false);
}

function reset() {
    var resetdiv = document.getElementById("newgameid");
    var rezultatdiv = document.getElementById("rezultat");
    var worddiv = document.getElementById("divWord");
    rezultatdiv.innerHTML = "";
    worddiv.innerHTML = "";
    resetdiv.remove();
    generate();
}

window.addEventListener("load", start, false);