
var count = document.getElementById("count").innerHTML
let prixU = "";

function add(img,price) {

var imgsrc = document.getElementById(img).src
document.getElementById("destination").src =imgsrc
document.getElementById("total").innerHTML = document.getElementById(price).innerHTML

 prixU = document.getElementById("total").innerHTML

     
}



function plus() {
    document.getElementById("count").innerHTML++;
    var total = prixU * document.getElementById("count").innerHTML
    document.getElementById("total").innerHTML = total
}

function moins() {
 if(document.getElementById("count").innerHTML> 1) {
    document.getElementById("count").innerHTML--;
}
   
    var total = prixU * document.getElementById("count").innerHTML
    document.getElementById("total").innerHTML = total


    

}

function total(prix){
   
    var total = prix * document.getElementById("count").innerHTML
    document.getElementById("total").innerHTML = total
    
    }

