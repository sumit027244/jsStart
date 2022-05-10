// // string is a sequence of characters

// const { log } = require("console");

// var str = "Hello pepcoders";
// // H e l l o <space> p e p c o  d  e   r  s        
// // 0,1,2,3,4,   5,   6,7,8,9,10,11,12,13,14 
// console.log(str);

// console.log(str[4]);

// // strings in js are immutable
// str[4] = "z"  
// console.log(str)

// // console.log(str.length()); //TypeError: str.length is not a function
// console.log(str.length);

// // string methods 

// // 1. Extraction method

// //slice method 
// // slice(start, end) -> start index is inclusive and end index is exclusive 
//                        //(start,end)
//  var slicedStr = str.slice(6,15); //start index se shuru hoga aur ending index se ek pehle index tak string kategi
// console.log(slicedStr); //pepcoders
// console.log(str); //Hello pepcoders //original source of information is not changed 

// var slicedStr = str.slice(6); //start se leke pori end tak string kategi
// console.log(slicedStr); //pepcoders
//                         //(2,str.length+(end))-> (2,15+(-4)) -> (2,15-4) -> (2,11)
// var slicedStr = str.slice(2,-4); //start se leke peeche ke end times jane chod do 
// console.log(slicedStr); //llo pepco

// //substring method 

// // substr(start, length); start index se shuru hoga aur aage ke kitne character capture krne h 

// let ans = str.substr(2, 6);
// console.log(ans); //llo pe
// console.log(str); //Hello pepcoders

// //replacing 
// str = "YOLO";
// console.log(str); //YOLO

// //to lower and uppercase 
// console.log(str.toLowerCase()); //yolo
// str = "fomo"
// console.log(str.toUpperCase()); //FOMO
// console.log(str); //fomo //information is intact and has not been tampered with 

// // concatenation method-> 2 combine 2 strings and make them one string

// let firstStr = "Believe in ";
// let secondStr = "yourself";

// let concatenatedStr = firstStr + secondStr;
// console.log(concatenatedStr); //Believe in yourself

// //concat method
// let concatStr = firstStr.concat(secondStr, " and me");
// console.log(concatStr); //Believe in yourself and me

// // trim method -> removes all the whitespaces of starting and ending of a string 

// let trimStr = "                                     Hello       how are you                 ";
// console.log(trimStr); //                                     Hello       how are you                 
// console.log(trimStr.length); //77

// console.log(trimStr.trim());//Hello       how are you
// console.log(trimStr.trim().length); //23


// var str = "Hello hello my name hello is Abhishek"
// console.log(str);
// // divides string on the basis of argument and puts them in an array
// var a=str.split("hello");
// console.log(a);