var Menubar=document.querySelector(".menu-bar-icon");
var menu=document.querySelector(".menu");
var menuIcon=document.querySelector(".IconMenu");
Menubar.addEventListener("click", function(){
    menu.classList.remove("MenuMenu")
})
menuIcon.addEventListener("click", function(){
    menu.classList.add("MenuMenu")
})


