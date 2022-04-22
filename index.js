document.querySelector("#home").addEventListener("click",function(){
   window.location.href="./index.html"
});

document.querySelector("#login").addEventListener("click",function(){
    window.location.href="./login.html"
 });

 document.querySelector("#signup").addEventListener("click",function(){
    window.location.href="./signup.html"
 });

 //slideshow

 const images=document.querySelectorAll("img");
 let i=0;
 console.log("images are",images);
 setInterval(function(){
     if(i==0){
         images[i].style.display="block";
         i++;
     }else if(i==images.length){
         images[i-1].style.display="none";
         images[0].style.display="block";
         i=0;
     }else{
        images[i-1].style.display="none";
        images[i].style.display="block";
        i++;
     }
 },2000);

 //movie data

 var moviedata=[
     {
         name:"Bahubali The Begining",
         releasedate:"10 july 2015",
         poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6K_QrMI4XfiolV8N2UWufzUb5_apVv6Ko8A&usqp=CAU",
         imdbrating:8.1
     },
     {
        name:"Bahubali 2",
        releasedate:"28 April 2017",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFp7Rv7FrzztaO33ETQab58yzaVB-rNy-gg&usqp=CAU",
        imdbrating:8.3
     },
     {
        name:"Bajrangi Bhaijaan",
        releasedate:"17 July 2015",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIDD-NjOvwCHDymiqnFVmeCKu8nvpg6I3uQ&usqp=CAU",
        imdbrating:8.1
     },
     {
        name:"KGF chapter1",
        releasedate:"21 december 2018",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVE_dt0-Igrzqi9a8ALni3KyAP0wzfxrEAMw&usqp=CAU",
        imdbrating:8.4
     },
     {
        name:"Pushpa The raise",
        releasedate:"17 December 2021",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNL5ga23xndwNjyn7LNy0HYnE3DE4dHTt_g&usqp=CAU",
        imdbrating:8.0
     },
     {
        name:"radhe shyam",
        releasedate:"11 march 2022",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9sxMB1jt6Hr8Y0yW4yUMBtuTCOX0FksqDg&usqp=CAU",
        imdbrating:6.8
     },
     {
        name:"aadavallu meeku joharlu ",
        releasedate:"4 march 2022",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkxP1pKMwRkKGqyV9ZxIVv2JQUoCbFuLJNg&usqp=CAU",
        imdbrating:6.2
     },
     {
        name:"Bheemla nayak",
        releasedate:"25 february 2022",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrIMmn6TZKZkMy1jsMQWyjhi5SeC6-D4nxg&usqp=CAU",
        imdbrating:7.6
     },
     {
        name:"RRR",
        releasedate:"24 march 2022",
        poster_url:"https://media2.bollywoodhungama.in/wp-content/uploads/2022/04/RRR-8.jpg",
        imdbrating:8.9
     }

 ]
 moviedata.forEach(function(ele){
   var box=document.createElement("div");
   var image=document.createElement("img");
   image.src=ele.poster_url;
   var title=document.createElement("p");
   title.innerText="Title:"+ele.name;
   var releasedate=document.createElement("p");
   releasedate.innerText="Release Date:"+ele.releasedate;
   var rating=document.createElement("p");
   rating.innerText="IMDB Rating:"+ele.imdbrating;
   box.append(image,title,releasedate,rating);
   document.querySelector("#movies").append(box);
 })
 

 //sorting functionality

 var temp=moviedata;
    document.querySelector("#sorting").addEventListener("change",sortfn);
    function sortfn(){
       var res=document.querySelector("#sorting").value;
       if(res=="sort-lh"){
        temp.sort(function(a,b){
             return a.imdbrating-b.imdbrating;
         });
       }else{
        temp.sort(function(a,b){
            return b.imdbrating-a.imdbrating;
        });
       }
       console.log(temp);
       display(temp);
    }
    function display(temp){
        document.querySelector("#movies").innerHTML=" ";
        temp.forEach(function(ele){
            var box=document.createElement("div");
            var image=document.createElement("img");
            image.src=ele.poster_url;
            var title=document.createElement("p");
            title.innerText="Title:"+ele.name;
            var releasedate=document.createElement("p");
            releasedate.innerText="Release Date:"+ele.releasedate;
            var rating=document.createElement("p");
            rating.innerText="IMDB Rating:"+ele.imdbrating;
            box.append(image,title,releasedate,rating);
            document.querySelector("#movies").append(box);
          });
    }