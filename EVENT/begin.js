
// function setUpEvents(){
//     var content=document.getElementById("content");
//     var button=document.getElementById("show-more");
    
//     button.onclick=function(){
    
//     if(content.className == "open"){
//         //shrink box
//         content.className = "";
//         button.innerHTML = "Show More";
//     }else{
//         //expand the box
//         content.className = "open";
//         button.innerHTML = "Show Less";
//     }
    
    
//     };
    

// }


// window.onload=function(){
//     setUpEvents();
// };

// var mymessage=document.getElementById("message");

// function showMessage(){
//     mymessage.className="show";
// }
// setTimeout(showMessage,3000);

// var colorchange=document.getElementById("color-changer");
// var colors=["red","blue","pink","skyblue"];
// var counter=0;

// function changeColor(){
//     if(counter >= colors.length){
//         counter = 0;
//     }
//     colorchange.style.background=colors[counter];
//     counter++;
// }

// var mytimer=setInterval(changeColor,3000);

// colorchange.onclick=function(){
 
//     clearInterval(mytimer);
//     colorchange.innerHTML="Timer Stopped";
// }

// var myform=document.forms.myform;
// var message=document.getElementById("message");

// myform.onsubmit=function(){
// if(myform.name.value == ""){
//     message.innerHTML="Please Fill the Name";
//     return false;
// }else{
//     message.innerHTML="";
//     return true;
// }

// };

// var mypara=document.getElementById("content").getElementsByTagName("p")[6];
// var mypara2=$("#content p:last-child");
