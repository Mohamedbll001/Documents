let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let total = 0;
let max = ventes[0];
let min = ventes[0];
let unique = 0;
let unitotal = 0;
for(let i = 0 ; i < ventes.length ; i++){
    total = total + ventes[i];
    if(ventes[i] > max){
        max = ventes[i];
    }
    if(ventes[i] < min){
        min = ventes[i];
    }
    if(ventes[i] >= 130){
        unique ++
    }
    if(ventes[i] >= 130){
        unitotal += ventes[i];
    }
}
console.log("ventes : ", ventes.length);
console.log("Total : ", total);
console.log("Max : ", max, "| Min : ", min);
console.log("Number of exceptional sales : ", unique);
console.log("Total value of exceptional sales : ", unitotal);