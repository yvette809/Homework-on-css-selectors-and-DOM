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
 //function to add a new link into the navbar
 // sol2
       function addLinkToNav() {
           let navs = document.querySelector('nav:last-child');
           let theLink = document.createElement('a');
             theLink.innerHTML = 'AddedLink';
             theLink.style.backgroundColor = 'green';
         navs.append(theLink);
           }
           addLinkToNav();
           // sol 3

           function newLinkTONavbar(text) {
            let parent = document.querySelector (".nav-scroller .nav")
            let link = document.createElement('a')
            link.href ="#"
            link.className="p-2 text-muted"
            link.innerText=text
            parent.appendChild(link)
    
        }

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
 function trimPost() {
 let post = document.querySelectorAll(".blog-post")


    post.forEach(element => {
      let pars=  element.getElementsByTagName("p")
        const length =150;
        for (let i=1; i<pars.length; i++) {

            if(pars[i].length<length) {
                length=length-pars[i].length
                pars[i].remove();

            } else {
                pars[1].innerText =  pars[i].innerText.substring(length)  
            }

        }




    });

}




 //exercise 18
/* window.onload = function addNew (){
     
     let newDiv = document.createElement('div')
     newDiv.classList.add('blog-post')
     let newHeading = document.createElement('h1')
     newHeading.classList.add('blog-post-title')
     newHeading.innerText = 'The latest story'
     newDiv.appendChild(newHeading)

 }
 let newer = document.querySelector('.newer')
 newer.onClick =  addNew()*/
 // sol 
 function addNewPost(){
    let blogMain = document.querySelector(".blog-main")
    console.log(blogMain)
    let divBlog = document.createElement("div")
    divBlog.classList = "blog-post"
    let h2 = document.createElement("h2")
    h2.classList="blog-post-tittle"
    h2.innerText = "New Blog Post"

    divBlog.appendChild(h2)
    blogMain.appendChild(divBlog)

}
    //sol 3
    function attachToNewer(titleText) {
        let parent=document.querySelector(".blog-main")

        console.log (parent)
        let element = document.querySelector(".blog-pagination");
        let child = element.getElementsByTagName("a")[1]
        child.classList.remove('disabled')
        child.addEventListener('click', function() {
            let newPost = document.createElement('div')
            newPost.className='blog-post';
            let title = document.createElement('h2')
            title.className ="blog-post-title"
            title.innerText = titleText;
            newPost.appendChild(title)
            parent.insertBefore(newPost, element)


        })
    }

 // exercise 19
/* window.onload = function removeLast (){
let lastPost = document.querySelector('.last-blog')
let oldButton = document.querySelector('.older')
oldButton.appendChild(lastPost)
oldButton.removeChild(lastPost)

 }
 oldButton.onClick = removeLast();*/

 // sol 2
 let element = document.querySelector(".blog-pagination");
 let olderBtn = element.getElementsByTagName("a")[0]
 let posts=document.querySelectorAll(".blog-post")
 console.log(posts[posts.length-1])
 olderBtn.addEventListener('click', function() {
     alert(posts[posts.length-1])
     posts[posts.length-1].remove()
 })

 //exercise 20
 window.onload = function alertCreated (){
     let author = document.querySelectorAll('.authors')
     for (let i = 0; i<author.length; i++){
         author[i].addEventListener('mouseover',function(){
             alert(author[i]).innerHTML
         })
     }
 }
 //sol 2
 let author = document.querySelectorAll('.blog-post-meta > a');
 for (i = 0; i < author.length; i++) {
 author[i].addEventListener('mouseover', message);
 }
function message() {
 alert(author); 
 }
//  message();

// sol 3 most preferable
const authors =document.querySelectorAll('.blog-post-meta a')
        authors.forEach(author => {
            author.addEventListener('mouseover', function() {
                alert(author.innerText)
                console.log(author.innerText)
            })
        })