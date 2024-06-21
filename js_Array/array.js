// Bodlogo-1

let fruit = [ "apple", "banana","orange","kiwi","grape" ];
console.log(fruit[0]);
console.log(fruit[4]);
console.log(fruit[2]);



// //Bodlogo-2a
//Хэдэн ширхэг сондгой тоо байгаа вэ?

let too = 0;
let array1 = [5,6,4,12,19,121,1,7,9,63];

for( let i = 0; i < array1.length; i++)
{
    if(array1[i] % 2 !== 0)
        {
        console.log(array1[i]);
        too = too + 1;
        }
}
console.log("Total Odd Number:", too);
// Bodlogo-2b
// Хэдэн ширхэг тэгш тоо байгаа вэ?





// Bodlogo-3.1
//Array iin length iin oloh

// let arrayofNumbers = [43,56,23,89,88,90,99,652,15,290,11];

// console.log("Array Length:",arrayofNumbers.length);



// 3.2  Array доторх тоонуудын нийлбэрийг ол.





//3.3 Array доторх тоонуудын average ол.

// let sum = 0;
// let aver = 0; 
// for(let i = 0 ; i < arrayofNumbers.length ; i++ ){
// sum = sum + arrayofNumbers[i];
// aver = sum / arrayofNumbers[i]
// }
// console.log("Array Average:", aver)



 // 3.5 Array доторх тэгш тоонуудын нийлбэрийг ол.

let arrayofNumbers = [43,56,23,89,88,90,99,652,15,290,11];
let sum = 0;
let mult = 1;
for ( let i =0; i < arrayofNumbers.length; i++)
    {
        if( arrayofNumbers[i] % 2 !== 0)
            {
            console.log(arrayofNumbers[i])
            sum = sum + arrayofNumbers[i];
            mult = mult * arrayofNumbers[i]
            }
    } 
console.log("Sondgoi Toonii Niilber",sum);
console.log ("Sondgoi toonii Urjver",mult)

// 3.7  Хамгийн их тоог ол

let arrayofNumbers7 = [43,56,23,89,88,90,99,652,15,290,11];
let max = arrayofNumbers7[0]; 

for (let i = 0 ; i <arrayofNumbers7.length; i++)

if(arrayofNumbers7[i] > max)
    {
        max = arrayofNumbers7[i]
    }
console.log("Hamgiin ih too:",max )

//  3.8 Хамгийн бага тоог ол.

let array = [43,56,23,89,88,90,99,652,15,290,11];
min = array[0] ; 
for ( let i = 0; i<array.length; i++)
{
    if (array[i] < min){
        min = array[i]
    }
}

console.log("Hamgiin baga too:", min )

