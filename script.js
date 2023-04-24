let searchBarEl=document.querySelector(".search_Bar_Icon_Container");
let magnifierEl=document.querySelector(".magnifier");
//
magnifierEl.addEventListener("click",()=>{
    searchBarEl.classList.toggle("active");
});