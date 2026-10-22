let nombres = [23, 15, 42, 9, 31, 18, 42, 5];
let popi = 42;
let pose = -1;
let min = nombres[0];
let max = nombres[0];
let Index_max=1;
let Index_min=1;
for(i = 1 ; i < nombres.length ; i++){
    if(nombres[i] < min){
        min = nombres[i]
        Index_min=i;
    }

    if(nombres[i] > max){
        max = nombres[i]
        Index_max=i;
    }
}

for(i = 0 ; i < nombres.length ; i++){
    if(nombres[i] === popi){
        pose = nombres[i]
        break;
    }
}

console.log("Maximum :" , max, "(Index : " ,Index_max,")");

console.log("Minimum :" , min, "(Index : " ,Index_min,")");

if(pose !== -1){
    console.log("meow meow : ",pose)
}else{
    console.log("meow meow")
}



