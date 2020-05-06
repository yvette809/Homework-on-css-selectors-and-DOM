 //exercise 11
 /*window.onload = function createLink(){
 let navP = document.querySelector('nav:last-child')
 let newA = document.createElement('a')
 newA.setAttribute = ('href', '#')
 newA.classList.add ('p-2 text-muted')
 newA.innerText = 'fashion'
 newA.style.backgroundColor = 'red'
 navP.appendChild(newA);*/

}
 function to add a new link into the navbar
       function addLinkToNav() {
           let navs = document.querySelector('nav:last-child');
           let theLink = document.createElement('a');
             theLink.innerHTML = 'AddedLink';
             theLink.style.backgroundColor = 'green';
         navs.append(theLink);
           }
           addLinkToNav();

//exercise 12
// sol 1 
/*function removeSearch(){
    document.getElementById("Search").innerHTML = "";
}*/
sol2
function removeSearchButton() {
    let searchBtn = document.querySelector('.text-muted svg');
    searchBtn.style.display = 'none';
   }
   removeSearchButton();



//exercise 13
 function changeColor () {
     let selectedE = document.querySelector('.jumbotron');
     selectedE.classList.remove('bg-dark');
     selectedE.classList.add('bg-success');

 }
 window.onload = changeColor();


 //exercise 14
 function changeTitle (){
     let mainTitle = document.querySelector('.jumbotron h1');
     mainTitle.style.color = 'black';
 }

 window.onload = changeTitle();

 //exercise 15
 /*let titleForBlog  = document.querySelectorAll('.blog-post-title');
 function changeSize() {
 for(i=0 ; i < titleForBlog.length; i++) {
     titleForBlog[i].classList.add('col-6');
 }
}*/
function columnSize(){
    let element = document.querySelectorAll(".featured");
    for (let i = 0; i<element.length; i++)
    element[i].classList.remove("col-md-6");
    element[i].classList.add("col-4");
}


 //exercise 16
 sol 1
 /*window.onload = function removeLinks (){
     let lis = document.querySelector('.second li')
     let newLi = document.querySelectorAll('.new')
     for(let i = 0; i< newLi.length; i++){
         lis.removeChild(newLi[i])
     }
 }*/
 window.onload = function removeLinksElswhere(){
    let list = document.querySelectorAll("ol .new")
    for (let i = 0; i<list.length;i++){
        list.innerHTML = ""
    }
    

}


 // exercise 17




 //exercise 18
 window.onload = function addNew (){
     
     let newDiv = document.createElement('div')
     newDiv.classList.add('blog-post')
     let newHeading = document.createElement('h1')
     newHeading.classList.add('blog-post-title')
     newHeading.innerText = 'The latest story'
     newDiv.appendChild(newHeading)

 }
 let newer = document.querySelector('.newer')
 newer.onClick =  addNew()


 // exercise 19
 window.onload = function removeLast (){
let lastPost = document.querySelector('.last-blog')
let oldButton = document.querySelector('.older')
oldButton.appendChild(lastPost)
oldButton.removeChild(lastPost)

 }
 oldButton.onClick = removeLast();

 //exercise 20
 window.onload = function alertCreated (){
     let author = document.querySelectorAll('.authors')
     for (let i = 0; i<author.length; i++){
         alert(author[i])
     }
 }
 author.addEventListener('mouseover', alertCreated)