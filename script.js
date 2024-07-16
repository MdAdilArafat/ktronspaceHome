
// bg-change on scroll starts
function change(){
    var nav = document.getElementById("navbar1")
    var scroll1 = window.scrollY;
    if(scroll1 < 7){
        nav.classList.remove("change-bg");
        console.log(scroll1)
    }
    else{
        nav.classList.add("change-bg"); 
    }
    
}
document.addEventListener('scroll', change);
 
// bg-change on scroll starts


// menubar(responsive)  button for navbar starts
function showNav(){
    var nav =document.querySelector(".nav2");
    var menu =document.querySelector(".bx-menu");
    var close =document.querySelector(".bx-x");
    nav.style.width="70%";
    menu.style.display="none";
    close.style.display="block";

}

function hideNav(){
    var nav =document.querySelector(".nav2");
    var menu =document.querySelector(".bx-menu");
    var close =document.querySelector(".bx-x");
    nav.style.width="0%";
    menu.style.display="block";
    close.style.display="none";
}

// menubar(responsive)  button for navbar starts