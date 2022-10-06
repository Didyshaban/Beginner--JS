alert("hello people");

//var youlikemeat=true;
//var mynum=10;
// var myage=19;

// if(myage>30){
//     document.write("you are over 30!");
// }else if(myage>20){
//     document.write("you are over 20");
// }else if(myage>10){
//     document.write("you are over 10");
// }else{
//     document.write("you are not over 10");
// }



//AND OPERATORS

// var myage=25;
// if(myage>=18 && myage<=30){
//     document.write("you can come");
//     } else{
//         document.write("you can not");

//     }
//OR OPERATORS

// var myage=35;
// if(myage<18 || myage>30){
//     document.write("you can not");
//     } else{
        
//         document.write("you can come");

//     }

//WHILE LOOPS

// var age=5;

// while(age<10){
//     console.log("you are less than 10");
//     age++;
// }
// document.write("you are now over 10");

//DO WHILE

// var age=5
// do{
//     console.log("you are less");
//     age++;
// }
// while(age<10);
// document.write("you are over");


//FOR

// var age;

// for(age=5;age<10;age++){
//     console.log("you are not over");
// }
// document.write("you are over%");

//BREAK and CONTINUE

// for(i=0;i<10;i++){
//     if(i===3 || i===5){
//         continue;
//     }
//     console.log(i);
//     if(i===7){
//         break;
//     }
// }
// console.log("I have broken out of the loop");

// var links=document.getElementsByTagName("a");
// for(i=0;i<links.length;i++){
//     links[i].className="link-"+i;
// }

//FUNCTION

// function getAverage(a,b){
//     var average= (a + b)/2;
//     console.log(average);

// }
// getAverage(8,7);

//WITH RETURN

// function getAverage(a,b){
//     var average= (a + b)/2;
//     return average;

// }
// myresult=getAverage(10,7);
// console.log("The average is:" + myresult);


//SCOPE:LOCAL AND GLOBAL VARIABLE

// function getAverage(a,b){
//     var average= (a + b)/2; //this is a local variable
//     return average;

// }
// myresult=getAverage(10,7);
// console.log("The average is:" + myresult);  //this is global variable

// function getresult(){
//     console.log("The average is:" + myresult);  //A GLOBAL VARIABLE IS BEING CALLED EVERYWHERE.
// }
// getresult();

// WORKING WITH Number

// var a = 5;
// var b = 7;

// console.log(a+b);
// console.log(Math.round(8.7));
// console.log(Math.round(8.4));
// console.log(Math.max(7,9,10,14));
// console.log(Math.PI);

// var a="7";
// var b=5;

// if(isNaN(a)){
//     console.log("that aint even a number");
// }else{

//     console.log("the maeaning of life is:"+(a*b));
// }

// var mystrings='I\'m a "fun" string';
// console.log(mystrings);


//CREATING AN OBJECT
var mycar = {
    maxspeed:70,
    driver : "Didyshaban",
    drive:function(speed,time){console.log(speed * time);},
   test:function(){console.log("my name is" + this.driver);}
};
console.log(mycar.driver);
mycar.drive(50,30);
mycar.test();
 
//THE DATE OBJECT

// var mydate= new Date();
// console.log(mydate);

var birthday= new Date(1985,0,15,11,15,25);
console.log(birthday.getDate());
console.log(birthday.getFullYear());
console.log(birthday.getDay());
console.log(birthday.getTime());
