const menu = document.getElementById("menu");
const body = document.getElementById("corpo");

function clique(){
    if(menu.style.translate == "0%"){
        menu.style.translate = "-100%";
        menu.style.overflow = "hidden";
        body.style.overflow = "auto";
    }
    else{
        menu.style.translate = "0%";
        menu.style.overflow = "auto";
        body.style.overflow = "hidden";
    }
}