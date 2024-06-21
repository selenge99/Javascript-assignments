// Bodlogo-1 
//10 хүртэлх натурал тоог хэвлэх программ бич

// for (let a = 0; a <= 10 ; a++)
// {
// console.log("Natural too", a )
// }


// Bodlogo-2
// 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич

// for (let n = 0 ; n <= 10 ; n++) 
// { 
//     if (n % 2 == 1) 
//     {
//     console.log("sondgoi too", n)
//     }
// }


// Bodlogo-3
// 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич

// for ( x = 0 ; x <= 10 ; x++) 
// {
//     if ( x % 2 == 0)
//     {
//     console.log("tegsh too", x)
//     }
// }

// Bodlogo-4 
// 100 хүртэлх натурал тооны нийлбэрийг олох программ бич

// let z = 0;
// let sum = 0;
// while( z <= 100)
// {
// sum = sum + z;
// z++
// }
// console.log("Sum",sum)


// bodlogo-5
// N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич jishee ni: input: 101 output: 5151

// let = Number(prompt("Ta duriin too oruulna uu"));
// let duriinNumber= 0 ;
// let niilber = 0;


// bodlogo-7
//Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич jishee ni: input: 123 output: 6

// let number = 123;
// let digit = 0 ;
// let sum1 = 0 ;

// while(number !== 0){
//     digit = number % 10;
//     number = number - digit;
//     number = number / 10;
//     sum1 = sum1 + digit;    
// }
// console.log("digit sum:", sum1)



// bodlogo-8
//Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол jishee ni: input: 1234 output:

// let number1 = 1234;
// let digit1 = 0;
// let evensum = 0;

// while( number1 !== 0) {
//     digit1 = number1 % 10;
//     number1 = number1 - digit1;
//     number1 = number1 / 10;

// if (digit1 % 2=== 0) 
//     {
//     evensum = evensum+digit1
//     }
// } 

// console.log("evensum",evensum)



//bodlogo-9
//N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич

// let n = 9;
// let oddsum = 0;
// for (let i = 1 ; i <= 9; i=i+2)
//     {
//     oddsum = oddsum + i 
//     }
// console.log("oddsum",oddsum)



//bodlogo-10
// N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич

// let = 8;
// let evensum1 = 0;

// for(let i = 0 ; i <= 8 ; i = i + 2)
//     {
//     evensum1 = evensum1 + i
//     }

// console.log("evensum",evensum1)



// //bodlogo-11
//Өгөгдсөн эерэг тооны урвууг хэвлэх программ бич jishee ni: input: 123 output: 321

let number = 123;
let digit = 0 ;
let sum = 0 ;

while(number !== 0){
    digit = number % 10;
    number = number - digit;
    number = number / 10;
    sum = sum * 10 + digit;    
}

console.log("digit sum:", sum)

