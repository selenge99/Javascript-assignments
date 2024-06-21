// Bodlogo-1

// Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]

// function addArr (arr, too){
//    arr.push(too);
//    return arr;

// }
// const newArr = addArr([],10);
// console.log(newArr);
// newArr = addArr([1,2,3],90);
// console.log(newArr);

// //Bodlogo-2
// function createNewArr(arr,len){
//     for (let i = 0 ; i < len ; i++){
//         arr.push(i + 1);
//     }
// }

// function createNewArr (len , min, max){
//     let arr = [];
//     for ( let i = 0 ; i< len ; i++){
//         let rndToo = 0;
//         while(rndToo < 100 ){
//             rndToo= Math.floor(Math.random() * max); 
//     }
    
//     }
//     arr.push(rndToo)
// }
// let a = createNewArr(5 , 100 , 300);
// console.log( "Arr", a )

// Bodlogo-3 

// let findSumAvg = prompt("Duriin too taslalaar zaaglaj oruulna uu !!!")
// console.log(findSumAvg);
// let n = [];
// let x = findSumAvg.split(",");
// console.log(x);
// for( let i = 0; i< x.length; i++){
//     n.push(Number(x[i]))
// }
// console.log(n)

// function niilber ( n ){
//     let sum = 0;
//     for ( let i = 0 ; i < n.length ; i++){
        
//         sum += n[i]
//     }
//     return sum
// }
// let y = niilber(n)
// console.log("Niilber", y);
// console.log ('Dundaj', y/n.length)


// Bodlogo-4 Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '

// let arr = 'the quick brown fox';
// let words = arr.split (' ')
// // console.log(words);
// let array = [];
// for ( let i = 0; i < words.length; i++){
//     let firsword= words[i];
//     let firstLet = firsword[0].toUpperCase();
//     let remWord = firsword.slice(1)
//     let zalgah = firstLet + remWord;

//     // console.log("k",firsword);
//     // console.log(firstLet);
//     // console.log(remWord);
//     console.log(zalgah);
//     array.push(zalgah);
//     console.log(array.join(" "))
// }

// // console.log(zalgah.join(" "));

// //Bodlogo - 5 

// function reverseText(text) {
//     // "hello world" => split(" ") => ["hello","world"]
//     return text.split("").reverse().join("");
//     // ["h","e","l","l","o"] =>["o","l","l","e","h"]
//   }
  
//   const textArr = ["Hello", "World", "Pinecone"];
//   // ["olleH", "dlroW", "enoceniP"];
//   function reverseArray(inputArr) {
//     let r = [];
//     for (let i = 0; i < inputArr.length; i++) {
//       r.push(reverseText(inputArr[i]));
//     }
//     return r;
//   }
  
//   let ra = reverseArray(textArr);
//   console.log(textArr);
//   console.log(ra);

  // Bodlogo - 6 

let main_text = "animal world";
console.log(main_text);
// let split_text = main_text.split(" ");
// console.log(split_text);
let haih_text = prompt("haih textee oruul");
function text_search(hariu) {
  if (main_text.includes(haih_text)) {
    return true;
  } else {
    return false;
  }
}
let result = text_search(main_text);
console.log("hariu:", result);

// Bodlogo - 7 


const data = [

  {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000 , casherId:1, date: '2022-11-01'},

  {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54.000,casherId:2, date: '2022-11-01'},

  {productName:"iceCream", unitPrice:8000, amount: 100, totalPrice: 800000, casherId:3, date: '2022-11-01'},

  {productName:"milk", unitPrice:5000, amount: 300, totalPrice: 1500000, casherId:4, date: '2022-11-01'},

  {productName:"egg", unitPrice:15000, amount: 50, totalPrice: 750000, casherId:5, date: '2022-11-01'},

];

function tootsoolol(data){
  let priceSum = 0;
  for (let i = 0; i< data.length ; i++){
    priceSum += data[i].totalPrice
  } 
  return priceSum
} 
console.log("totalPrice",tootsoolol(data));
console.log(totalPrice.sort())

// Дараах даалгаварыг хийж гүйцэтгэнэ үү.

// Нийт борлуулалтын дүнг тооцоолох.

// Нийт борлуулагдсан барааны тоог тооцоолох.

// Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

// Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.