const prompt = require("prompt-sync")();

let nia = Math.floor(Math.random() * 100) + 1;

let nono = prompt("5amm f number ida jbtih n3tik warda ");
for (let i = 1; i <= 6; i++) {
    if (isNaN(nono) || nono === "") {
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
        break;
    }
}
