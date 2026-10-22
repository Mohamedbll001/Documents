let panier = [15, 42, 5, 89, 12, 50, 8];
let meow = 0 ;
let meaw = 0 ;
let meew = 0 ;
for(let i = 0 ; i < panier.length ; i++){
    meow = meow + panier[i];
    if(panier[i] < 20 ){
        meaw++;
    }
    if(panier[i] < 20){
        meew = meew + panier[i]
    }
}
console.log("total : ",meow);
console.log("ha nta : ",meaw);
console.log("meow meow : ",meew);