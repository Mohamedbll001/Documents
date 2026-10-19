const prompt = require("prompt-sync")(); //hna tantlbo mn mktaba li bin 9osin 

let nia = Math.floor(Math.random() * 100) + 1; //folor hiya wa7d l3iba tadir x100 w rqndom t3tik ra9m mn 0 - 0,99

let nono = prompt("5amm f number ida jbtih n3tik warda "); //hna drna nono 
for (let i = 1; i <= 6; i++) {
    if (isNaN(nono) || nono === "") { //hadi raha biha ida 7tit walo ghadi t9olha lik w t3tik tktb number
        console.log("da5l xi number ^^");
        nono = prompt("5amm f number ida jbtih n3tik warda ");
        continue;
    }
    nono = Number(nono);
    if (nono === nia){
        console.log("mabrouk 3lik hak l warda");
        break;
    } else if (nono < nia) {
        console.log("khtar akbar men " + nono);
        nono = prompt("5amm f number  ");
    } else {
        console.log("khtar sghar men " + nono);
        nono = prompt("5amm f number  ");
    }
    
    if (i === 5) {
        console.log("sir fi 7alk no warda");
        break;// break han fin tlb mn code yw9af ida dar xart
    }
}
