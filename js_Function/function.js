// let a = 20;
// let b = 10;

// function hevle(){
//     console.log("2 toonii niilber", a+b);
// }

// function hevle2(too1,too2){
// console.log("2 toonii niilber",too1+too2);
// }
// console.log("function");
// hevle();
// hevle2(11,33);
// let h2 = hevle2(44,22);

// function nemeh(x,y){
//     return x+y;
// }

// let sum = nemeh(15,15);
// console.log("hevle",h2);
// console.log("nemeh",sum);



// Urhih
// function urjih( too1,too2){
//     // console.log("Urjih: ", too1)
//     return too1*too2;
// }
// let result = urjih(1,5);
// console.log("Urjih",result);


// //Divide 
// function huvaah( too1,too2){
//     return too1/too2;
// }
// let divide = huvaah(10,5);
// console.log("huvaah",divide)


// // Nemeh
// function nemeh( too1, too2){
//     return too1+too2;
// }
// console.log("nemeh",nemeh(20,30));


// // Hasah 
// function hasah(too1,too2){
//     return too1-too2;
// }
// console.log("hasah",hasah(100,70));

// let huvaah = function (x,y) {
//     return x/y;
// }; experession zovhon door ni duudna
// huvaah();

// function huvaah (x,y){
//     return x / y 
// }; declaration haana ch duudaj bolno

//ES => Arrow function

// let square = (x) => {
//     return x * x;
// }
// console.log("square", x(4));


// Bodlogo-1

// function ihiignioloh(too1,too2){
//     if(too1>too2)
//     {
//         return too1;
//     }
//     else{
//         return too2;
//     }
// }
// console.log("ih too", ihiignioloh(90,20));

// // Bodlogo-2 

// let arr = [10,20,30,40,50];
// function findIndex ( searchArr,findToo ){
//     console.log("Search arr",searchArr);
//     console.log("find number", findToo)
//     for ( let i = 0; i <= array.length; i++){
//         if (  searchArr[i] === findToo ) {
//             return i;
//         }         
// }
// return -1
// }
// let idx = findIndex(arr,20);
// console.log("Index",findIndex(arr,20));


// // Bodlogo-5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
// let numbers = [1,2,3,4,5];

// function findAverage(numbers){
//     let sum = 0;
//     for ( let i = 0; i< numbers.length;i++){
//         sum = sum + numbers[i]
//     }
//     return sum / numbers.length
// }
// console.log("Average Numbers ",findAverage(numbers));


// //Bodlogo-4

// let sum = [10,20,30,40,50];

// function niilber(sum){
//     console.log("working")
//     let x = 0;
//     for( let i = 0; i < sum.length; i++){
//         console.log("i-",i)
//         x += sum[i]
//     }

//     return x ;   
// }
// console.log("Niilber", niilber(sum));

// // bodlogo-6

// function prime(x){
//     for (let i = 2; i < x ; i++){
//        if(x % i === 0){
//         return 'not prime number'
//        }   
//        else {return "prime number"}
//     } 
    
   
// }
// console.log("Anhnii too",prime(5))

// // Bodlogo-7 

// function palin (x){
//     let pal = x;
//     let last = 0;
//     let reverse = 0;
//     // 121 
//     while ( x !== 0 ){
//         // x = 1 => 1
//       last = x % 10 // 1 
//       x =  Math.floor(x / 10); // 0 
//       reverse = reverse * 10 + last // 32 * 10 + 1 = 121
//     }
//     if(pal === reverse){
//         return true;
//     }else{
//         return false;
//     }
// }

// let res = palin(232);
// console.log("Palindrome too mun eseh: ", res)
// res = palin(12345);
// console.log("Palindrome too mun eseh: ", res)
// res = palin(1234321);
// console.log("Palindrome too mun eseh: ", res)

// // Bodlogo-9

// let students = [

//     { 
//     name: 'Сэд-Эрдэнэ',
//     age: 19,
//     gender: "male",
//     points: 70
//     },

//     { 
//     name: 'Индра',
//     age: 19,
//     gender: "female",
//     points: 50
//     },

//     { 
//     name: 'Хатнаа ',
//     age: 21,
//     gender: "male",   
//     points: 99
// },

//     { 
//     name: 'Тэмүүлэн',
//     age: 23,
//     gender: "male",
//     points: 55

// },

//     {
//     name: 'Намуун',
//     age: 23,
//     gender: "female",
//     points: 85

// },

// ]
// // Эхний объектыг хэвлэж гаргах
// console.log("Name: ",students[0].name);
// console.log("Age: ",students[0].age);
// console.log("Gender: ",students[0].gender);
// console.log("Points: ",students[0].points);

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 

// function male(totalStudents){
//     for (let i = 0 ; i < totalStudents.length; )
// }

// Сурагчдын насны дунджийг олох функц бичих 
// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
// 60-аас дээш оноо авсан cурагчдийг тоол








