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

  //signup page functionality
var usersignupdata;
if(localStorage.getItem("usersignupdata")===null){
    usersignupdata=[];
}else{
    usersignupdata=JSON.parse(localStorage.getItem("usersignupdata"));
}
document.querySelector('form').addEventListener("submit",function(){
    event.preventDefault();
    var obj={
        name:document.querySelector("#name").value,
        contactno:document.querySelector("#contactno").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    if(obj.name && obj.contactno && obj.email && obj.password){
        usersignupdata.push(obj);
        console.log(usersignupdata);
        localStorage.setItem("usersignupdata",JSON.stringify(usersignupdata));
        alert("Signed up successfully");
        window.location.href="./login.html"
    }else{
        alert("enter the all reqiured fields");
    }
    
})


