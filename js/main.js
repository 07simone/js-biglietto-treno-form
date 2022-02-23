/* const kmDaPercorrere = parseInt(x,base); */

/* const prezzokm = 0.27;
let prezzo = prezzokm * kmDaPercorrere; */
/* 
 if( etaUtente < 18){
    
    prezzoFinale =product- (product * 20 / 100) ;
    document.getElementById('km').innerHTML = prezzoFinale .toFixed(2) ;

} else if (etaUtente >= 18 && etaUtente <= 65) { 

    product = (0.21 * kmUtente) .toPrecision(2);
    document.getElementById('output').innerHTML = product .toFixed(2) ;

} else if( etaUtente >65){

    prezzoFinale2 = product - (product * 40 / 100) ;
    
    document.getElementById('km-over').innerHTML = prezzoFinale2 .toFixed(2) ;
}
  */


/* let message =""; */

document.querySelector(".btn-secondary").addEventListener('click', function(){
     let messaggioOfferta ="";
     let etaUtente = document.getElementById("inputGroupSelect03");
    console.log(etaUtente.value);

    const newName = document.getElementById("nome");
    console.log(newName);
    /* const randomInt = Math.floor(Math.random() * 9) +1; */
    
    console.log(`${newName.value }`);       
    document.getElementById("passegero").innerHTML = (`${newName.value }`);
    

    document.getElementById("offering").innerHTML = (`${messaggioOfferta}`); 
      console.log(offering);  
    
    let minorenne="";
    let maggiorenne="";
    let over65="";

    if( etaUtente == minorenne ){
    
        prezzoFinale =product- (product * 0.17) ;
        document.getElementById('km').innerHTML = prezzoFinale .toFixed(2) ;
        messaggioOfferta ="il prezzo del biglieto sarà scontato del 17%";
        console.log(messaggioOfferta);
    
    } else if (etaUtente == minorenne && etaUtente == maggiorenne) { 
    
        product = (0.21 * kmUtente) .toPrecision(2);
        document.getElementById('output').innerHTML = product .toFixed(2) ;
        messaggioOfferta ="il prezzo del biglieto non verrà scontato"

    } else if( etaUtente == over65){
    
        prezzoFinale2 = product - (product * 0.33) ;
        document.getElementById('km-over').innerHTML = prezzoFinale2 .toFixed(2) ;
        messaggioOfferta ="il prezzo del biglieto verrà scontato del 33%"
    }  
    

    /* document.getElementById("carrozza").innerHTML = (`${randomInt.value }`); */
    /* console.log(`${randomInt.value }`) */
});