    let userName = document.getElementById("nome");
    let userAge = document.querySelector("#eta");
    let userDistance = document.querySelector("#numeri-km");
    const prezzoKm = 0.27;

    const generatorTicket = document.getElementById("button-generator");


    generatorTicket.addEventListener("click",function(){
    
        let prezzoBiglietto = prezzoKm * userDistance.value;
        console.log(prezzoBiglietto);

        console.log(userName.value);
        console.log(userAge.value);

        if (userAge.value == "minorenne"){
            prezzoBiglietto -= prezzoBiglietto * 0.17;
            console.log ("Scontato del 17%");
        } else if ( userAge.value == "over65"){
            prezzoBiglietto -= prezzoBiglietto *0.33;
            console.log ("Scontato del 33%");
        } else{
                console.log("nessuno sconto");
            }
            console.log(prezzoBiglietto);


            let output = document.getElementById("passegero")
            output.innerHTML = (`${userName.value}`);

            let outputcost = document.getElementById("totale")
            outputcost.innerHTML = (`${prezzoBiglietto.toFixed(2)} €`);
        }
    )


    const ticketReset = document.getElementById("button-reset");
    ticketReset.addEventListener("click", function(){
        let prezzoBiglietto = prezzoKm * userDistance.value;
        userName.value ="";
        userAge.value ="";
        userDistance.value ="";
        let output = document.getElementById("passegero")
        output.innerHTML = (`${userName.value}`);

        let outputcost = document.getElementById("totale")
        outputcost.innerHTML = (`${prezzoBiglietto.toFixed(2)} €`);
    });