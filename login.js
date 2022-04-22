// navbar functionality

document.querySelector("#home").addEventListener("click",function(){
    window.location.href="./index.html"
 });
 
 document.querySelector("#login").addEventListener("click",function(){
     window.location.href="./login.html"
  });
 
  document.querySelector("#signup").addEventListener("click",function(){
     window.location.href="./signup.html"
  });
//login page functinality
var usersignupdata;
if(localStorage.getItem("usersignupdata")===null){
    usersignupdata=[];
}else{
    usersignupdata=JSON.parse(localStorage.getItem("usersignupdata"));
}
document.querySelector("form").addEventListener("submit",loginfn);

function loginfn(){
    event.preventDefault();
    var enteredemail=document.querySelector("#email").value;
    var enteredpassword=document.querySelector("#password").value;
    var flag=false;
    usersignupdata.forEach(element => {
        if(enteredemail==element.email && enteredpassword==element.password){
            console.log("hi");
            flag=true;
            alert("login successful");
            window.location.href="./index.html";
        }
    });
    if(flag==false){
        alert("entered wrong credentials");
    }
}

