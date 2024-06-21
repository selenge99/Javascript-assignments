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

let arr = 'the quick brown fox';
let words = arr.split (' ')
// console.log(words);
let array = [];
for ( let i = 0; i < words.length; i++){
    let firsword= words[i];
    let firstLet = firsword[0].toUpperCase();
    let remWord = firsword.slice(1)
    let zalgah = firstLet + remWord;

    // console.log("k",firsword);
    // console.log(firstLet);
    // console.log(remWord);
    console.log(zalgah);
    array.push(zalgah);
    console.log(array.join(" "))
}

// console.log(zalgah.join(" "));

//Bodlogo - 5 

function reverseText(text) {
    // "hello world" => split(" ") => ["hello","world"]
    return text.split("").reverse().join("");
    // ["h","e","l","l","o"] =>["o","l","l","e","h"]
  }
  
  const textArr = ["Hello", "World", "Pinecone"];
  // ["olleH", "dlroW", "enoceniP"];
  function reverseArray(inputArr) {
    let r = [];
    for (let i = 0; i < inputArr.length; i++) {
      r.push(reverseText(inputArr[i]));
    }
    return r;
  }
  
  let ra = reverseArray(textArr);
  console.log(textArr);
  console.log(ra);