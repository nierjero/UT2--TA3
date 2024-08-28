
let suda51 = ['TSC', '25TH', 'K7', 'FSR','NMH'];
let item = 'NMH';

function removeFromArray(arreglo, item) {
    
    let index = arreglo.indexOf(item)
    
    if (index !== -1){
        arreglo.splice(index, 1);
        console.log(arreglo);
    } 

}

removeFromArray(suda51,item);