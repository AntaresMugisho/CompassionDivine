// CALENDAR SLIDER
//Goma
let prev_goma = document.querySelector(".prev_scroll.goma");
let next_goma = document.querySelector(".next_scroll.goma");
let container_goma = document.querySelector(".cards_container.goma");


prev_goma.addEventListener("click", function (){
    container_goma.scrollLeft=container_goma.scrollLeft-776;
})
next_goma.addEventListener("click", function (){
    container_goma.scrollLeft=container_goma.scrollLeft+776;
})

// Bangui
let prev_bangui = document.querySelector(".prev_scroll.bangui");
let next_bangui = document.querySelector(".next_scroll.bangui");
let container_bangui = document.querySelector(".cards_container.bangui");

prev_bangui.addEventListener("click", function (){
    container_bangui.scrollLeft=container_bangui.scrollLeft-776;
})
next_bangui.addEventListener("click", function (){
    container_bangui.scrollLeft=container_bangui.scrollLeft+776;
})

// Cibitoke
let prev_cibitoke = document.querySelector(".prev_scroll.cibitoke");
let next_cibitoke = document.querySelector(".next_scroll.cibitoke");
let container_cibitoke = document.querySelector(".cards_container.cibitoke");

prev_cibitoke.addEventListener("click", function (){
    container_cibitoke.scrollLeft=container_cibitoke.scrollLeft-776;
})
next_cibitoke.addEventListener("click", function (){
    container_cibitoke.scrollLeft=container_cibitoke.scrollLeft+776;
})