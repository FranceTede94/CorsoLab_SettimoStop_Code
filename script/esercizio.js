let punteggio1 = 0;
let punteggio2 = 0;

document.getElementById("inizia").onclick = function(){

document.getElementById("inizia").style.display="none";
document.getElementById("scelta").style.display="block";
document.getElementById("you").style.backgroundImage= "none";

}

document.getElementById("foglia").onclick = function(){

let numero1 = (parseInt(Math.random() * 3) + 1);
console.log(numero1);
document.getElementById("inizia").style.display="inline-block";
document.getElementById("scelta").style.display="none"
document.getElementById("you").style.backgroundImage= "url(immagini/foglia.png)";

if(numero1 == 1){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/foglia.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Partita patta";
}

if(numero1 == 2){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/forbice.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Hai perso";
    punteggio2++;
    document.getElementById("punteggioCpu").innerHTML = punteggio2;
}


if(numero1 == 3){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/sasso.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Hai perso";
    punteggio2++;
    document.getElementById("punteggioCpu").innerHTML = punteggio2;

}
}

document.getElementById("forbice").onclick = function(){

let numero2;
numero2 = (parseInt(Math.random() * 3) + 1);
console.log(numero2);

document.getElementById("inizia").style.display="inline-block";
document.getElementById("scelta").style.display="none"
document.getElementById("you").style.backgroundImage= "url(immagini/forbice.png)";


if (numero2 == 1){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/foglia.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Hai vinto";
    punteggio1++;
    document.getElementById("punteggioYou").innerHTML = punteggio1;   
}

    
if(numero2 == 2){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/forbice.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Partita patta";
}    
    
if(numero2 == 3){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/sasso.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Hai perso";
    punteggio2++;
    document.getElementById("punteggioCpu").innerHTML = punteggio2;
}    
    
}

document.getElementById("sasso").onclick = function(){

let blocco3;
blocco3 = (parseInt(Math.random() * 3) + 1);
console.log(blocco3);

document.getElementById("inizia").style.display="inline-block";
document.getElementById("scelta").style.display="none"
document.getElementById("you").style.backgroundImage= "url(immagini/sasso.png)";
 
if (blocco3 == 1){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/foglia.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Hai vinto";
    punteggio1++;
    document.getElementById("punteggioYou").innerHTML = punteggio1;
    
}
    
if(blocco3 == 2){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/forbice.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Hai vinto";
    punteggio1++;
    document.getElementById("punteggioYou").innerHTML = punteggio1; 
}   
    
    
if(blocco3 == 3){
    document.getElementById("cpu").style.backgroundImage= "url(immagini/sasso.png)";
    document.getElementById("risultato").style.display = "inline-block";
    document.getElementById("risultato").innerHTML = "Partita patta"; 
} 

}

