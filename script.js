 //exercise 11
 function createLink(){
 let navP = document.querySelector('.nav')
 let newA = document.createElement('a')
 newA.setAttribute = ('href', '#')
 alert.classList.add ('p-2 text-muted')
 newA.innerText = 'fashion'
 navP[0].appendChild(newA);

}

//exercise 12



//exercise 13
 function changeColor () {
     let selectedE = document.querySelector('.jumbotron');
     selectedE.style.backgroundColor = 'green';

 }
 window.onload = changeColor();


 //exercise 14
 function changeTitle (){
     let mainTitle = document.querySelector('.jumbotron h1');
     mainTitle.style.color = 'black';
 }

 window.onload = changeTitle();

 //exercise 15


 //exercise 16
 window.onload = function removeLinks (){
     let lis = document.querySelector('.second')
     let newLi = document.querySelectorAll('.new')
     for(let i = 0; i< newLi.length; i++){
         lis.removeChild(newLi[i])
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