// alert("hello");
// var age=25;
// console.log(age);
// age++;
// console.log(age);


// == means comparison this match only value of the variable
var x = 5;
var y = 5;
console.log("X and Y is equal (==)", x==y);

// but when one is string and other is integer it also gives true because both value is same.
// == only check value
var a = 8;
var b = "8";
console.log("A is integer and B is string but both is equal (==)", x==y);

// but when use (===) one is string and other is integer it also gives true because both value is not same.
// (===) match the value and datatype of variable
// similarly !== it also check the value and datatype
var l = 8;
var m = "8";
console.log("L is integer and M is string but both is not equal (===)", l===m);


//loops in js
console.log("loop in Js")
for(i=1; i<=4; i++){
    console.log("value of i is", i);
}
 // function
console.log("Function in js")
function myfun(name){
    console.log("this is function",name)
}
myfun("majid");

// event handler
var btn = document.getElementById("btn");
function ButtonClicked(){
    console.log("on click Result handle by event handler");
    btn.removeEventListener("click",ButtonClicked);
    document.getElementById("text").innerHTML= "you pressed the button one time Successfully";
}
btn.addEventListener("click", ButtonClicked);
// console.log("hy");


console.log("arrays in JS");
let web =['HTML5','CSS','Bootstrap','Javascript','Ajax'];
console.log(web);
console.log("am learning",web[3],"in this course");
console.log("Total length of Web Array is",web.length);

let butn = document.getElementById("new_btn")
function newbutton(){
    // console.log("input button");
    let textValue = document.getElementById("fname");
    let result = document.getElementById("text");
    // console.log(textValue);
    result.innerHTML=textValue.value ;
    // console.log(result.innerHTML)
}
butn.addEventListener("click", newbutton);

let arr=["majid","Shanyar","Azher","Mohsin"];
console.log(arr);
arr.forEach(function (items,index){
   console.log(items,index)
});


//remove first items in array
arr.shift();
console.log(arr);

//Add items at start
arr.unshift("Ali");
console.log(arr);

//Splice or cut items from middle
arr.splice(1, 2);
console.log(arr);

//to find the index number of array use indexOf
let arr1=["hy","hello","Name","intro"];
console.log(arr1.indexOf("Name"));



//missing number from array
let arr_num =[1,11,3,14,5,16,17,9,19,20,6,7,8,18,10,2,12,13,15];
console.log(arr_num);
// function search_arr(){
//     arr_num.sort(function (a,b) {
//         return a-b;
//     });
//     console.log(arr_num)
//     let i=0;
//     arr_num.forEach(function (item){
//         i++;
//         if(item == i){
//             console.log("Number",i,"exist in Array");
//         }
//         else {
//             console.log(i,"is missing in Array");
//             i++;
//         }
//
//     })
//
//     console.log(arr_num);
// }
// search_arr();

//find the missing number in array
function new_fun() {
    let missing_num=-1;
    for (let i=1; i<=arr_num.length; i++){
        if (arr_num.indexOf(i)=== -1){
            console.log("missing num is",i);
        }
    }
}
new_fun();

