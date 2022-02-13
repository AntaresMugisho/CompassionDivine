// SIDE MENU
let menu_btn = document.querySelector(".menu_btn");
let close_btn = document.querySelector(".close_btn");
let side_menu = document.querySelector(".side_menu");
let site_name = document.querySelector(".site_name")

function show_menu(){
    menu_btn.style.display="none";

    side_menu.style.display="block";
    side_menu.style.transform="translateX(0%)";
    side_menu.style.transition="0.6s all ease";
    
}

function hide_menu(){
    menu_btn.style.display="block";
    side_menu.style.display="none";

    side_menu.style.transform="translateX(101%)";
    side_menu.style.transition="transform 1s";
}

// THEME SLIDER

let theme_slider=document.getElementsByClassName("theme");

let visible = 0;

let prev_btn = document.querySelector(".prev_btn");
let next_btn = document.querySelector(".next_btn");

let themes_nb = theme_slider.length;


function delete_active_id(){
    for (let i=0; i < themes_nb; i++ ){
        theme_slider[i].removeAttribute("id");
        document.querySelector(".label_slide.r"+i).style.backgroundColor="white";
    };
};

function precedent(){
    visible--;
        if (visible  < 0){
            visible = themes_nb -1
        }
    delete_active_id();
    //theme_slider[visible].setAttribute("id", "active");
    document.querySelector(".label_slide.r"+visible).style.backgroundColor="rgb(2, 148, 51)"
    document.getElementById("radio" + visible).checked=true;
};

function suivant(){
    visible++;
        if (visible >= themes_nb){
            visible=0
        }

    delete_active_id();
    //theme_slider[visible].setAttribute("id", "active");
    document.querySelector(".label_slide.r"+visible).style.backgroundColor="rgb(2, 148, 51)"
    document.getElementById("radio" + visible).checked=true;
};

prev_btn.addEventListener("click", precedent);
next_btn.addEventListener("click", suivant);


//setInterval(suivant, 3000)
//clearinterval


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


