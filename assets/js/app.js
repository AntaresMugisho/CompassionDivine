
// Show / Hide menu on mobile and tablet

let navbar = document.querySelector(".nav");

const humburger = document.querySelector(".humburger");

humburger.addEventListener('click', toggle_menu)

function toggle_menu(){
    navbar.classList.toggle("nav--show");

    humburger.classList.toggle("fa-bars");
    humburger.classList.toggle("fa-xmark");
}

const nav_links = document.getElementsByClassName("nav__link");
for (const nav_link of nav_links){
    nav_link.addEventListener("click", toggle_menu)
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
    }
}

function precedent(){
    visible--;
        if (visible  < 0){
            visible = themes_nb -1
        }
    delete_active_id();
    //theme_slider[visible].setAttribute("id", "active");
    document.querySelector(".label_slide.r"+visible).style.backgroundColor="rgb(2, 148, 51)"
    document.getElementById("radio" + visible).checked=true;
}

function suivant(){
    visible++;
        if (visible >= themes_nb){
            visible=0
        }

    delete_active_id();
    //theme_slider[visible].setAttribute("id", "active");
    document.querySelector(".label_slide.r"+visible).style.backgroundColor="rgb(2, 148, 51)"
    document.getElementById("radio" + visible).checked=true;
}

prev_btn.addEventListener("click", precedent);
next_btn.addEventListener("click", suivant);


setInterval(suivant, 5000)
//clearinterval
