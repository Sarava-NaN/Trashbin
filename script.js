let lists=document.querySelector(".lists");
let navBar=document.querySelector(".arrow");

navBar.addEventListener("click",()=>{
    lists.classList.toggle("javaScript_1");
    navBar.children[0].classList.toggle("jslink_1");
    navBar.children[1].classList.toggle("jslink_2");
    navBar.children[2].classList.toggle("jslink_3");
})