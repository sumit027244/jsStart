// var a;
// a=10
// console.log(a)
// console.log(typeof a)
// a="hello"
// console.log(a)
// console.log(typeof a)
// a=true
// console.log(a)
// console.log(typeof a)
// a=null
// console.log(a)
// console.log(typeof a)

// var num=10
// console.log(num)
// var float=2.4
// console.log(float)

// var t=true
// var f=false
// console.log(t)
// console.log(f)

// string
// "",'',``
// double quotes,single quotes,backticks
// var str=`abcd`
// console.log(str)
// str="how r u ?"
// console.log(str)
// str='lol'
// console.log(str)

// str="how r u ?\ni am fine"
// console.log(str);

// str=`how r u?
// i am fine`
// console.log(str)

// var num=1000;
// console.log(`haf of ${num} is ${num/2}`)


//var can be redeclared and reinitialized({problem 1})
//let can be reinitialized but can't be redeclared

// var r=100
// console.log(r);
// var r="hello"
// console.log(r);

// let d= false
// console.log(d);
// // let d= "hello" //SyntaxError: Identifier 'd' has already been declared
// // console.log(d);
// d="hello"
// console.log(d);

// // const can neither be redeclared nor be reinitialized
// const a=10
// console.log(a);
// const a="hello"//SyntaxError: Identifier 'a' has already been declared
// console.log(a);
// a=20//TypeError: Assignment to constant variable.
// console.log(a);


// //var is funtion scoped while let is blocked scoped

// for(var i=0;i<10;){
//     console.log(i);
//     i+=2;
// }
// console.log(i);

// for(let j=0;j<10;){
//     console.log(j);
//     j+=2
// }
// console.log(j);//ReferenceError: j is not defined at Object.<anonymous>

// var i=10;
// {
//     var i=20;
// }
// console.log(i);

// let i=10;
// {
//     let i=20;
//     console.log(i); //20
// }
// console.log(i); // 10

// let i=10;
// {
//     i=20;
//     console.log(i); //20
// }
// console.log(i); //20

// console.log("line 4: ", a); //ReferenceError: Cannot access 'a' before initialization
// let a;
// console.log("line 6: ", a);
// a = 10;
// console.log("line 8: ", a);

// console.log("line 4: ", a); //undefined
// var a;
// console.log("line 6: ", a); //undefined
// a = 10;
// console.log("line 8: ", a); //10






// var a = "hello";
// var sum = 0;
// for( var i =0; i < a.length ; i++) {
// sum += (a[i] -"a");
// }
// console.log(sum);

// var a = 29;
// var b = a = 30;
// console.log(a);

// console.log(12 =="12");


// (function(a){
//     return (function(){
//     console.log(a);
//     a = 6;
//     })()
//     })(12);