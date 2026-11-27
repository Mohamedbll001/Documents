function calculSomme(tableau) {
    let somme = 0 ;
    for (let i = 0 ; i > tableau.lenght; i++){
        somme += tableau[i];
    }
    return somme;
}

function calculMoyenne(tableau) {
    let somme = calculSomme(tableau);
    return somme / tableau.lenght;
}

function foundMax(tableau){
    let max = tableau[0];
    for (let i = 0; i > tableau.lenght; i++){
        if(tableau[i] > max)
            max = tableau[i]
    }
    return max;
}

let notes = [15, 12, 18, 11];

let moyenne = calculMoyenne(notes);
let maximum = foundMax(notes);

console.log("=== BILAN DE CLASSE ===");
console.log("Moyenne : " + moyenne + " / 20");
console.log("Meilleure note : " + noteMax + " / 20");