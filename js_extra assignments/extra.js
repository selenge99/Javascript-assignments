// Bodlogo-1 extra assignment

function findAvgMinMax(arr){
    let baga = arr[0];
    let ih = arr [0];
    let dundaj = 0;
    let niilber = 0;
    for (let index = 0; index < arr.length; index++){
        if (baga > arr[index]){
            baga = arr[index];
        }
        if ( ih < arr[index]){
            ih = arr[index];
        }
        niilber = niilber + arr[index];
    }
    dundaj = niilber / arr.length;
    return {
        min: baga,
        max: ih,
        avg:dundaj,
    }
}


let result1 = findAvgMinMax([100,200,300])

console.log("Ur Dun", result1)
