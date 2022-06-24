
// Show / Hide menu on mobile and tablet

const humburger = document.querySelector(".humburger");
humburger.addEventListener('click', toggle_menu)

function toggle_menu(){
    let navbar = document.querySelector(".nav");
    navbar.classList.toggle("nav--show");
    humburger.classList.toggle("fa-bars");
    humburger.classList.toggle("fa-xmark");
}

const nav_links = document.getElementsByClassName("nav__link");
for (const nav_link of nav_links){
    nav_link.addEventListener("click", toggle_menu)
}

// Animations avec intersection observer

let options = {
    // root: null,
    rootMargin: "-100px 0px",
    treshhold: .5
}

const observer = new IntersectionObserver(handle_intersect, options);
const observables = document.querySelectorAll(".obs");

observables.forEach(observable => {
    if (observable.classList.contains("obs")){
       observable.classList.add("obs--not-visible"); 
    }
    observer.observe(observable);
})

function handle_intersect(entries, observer){
    entries.forEach(entry => {

        if (entry.isIntersecting){
            entry.target.classList.remove("obs--not-visible");
        }
        // else{
        //     entry.target.classList.add("obs--not-visible");
        // }
    })
}

// Fenêtre modale sur la page Médias

const modal_triggers = document.querySelectorAll(".modal-trigger");
const modal_container = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

modal_triggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal(e){
    modal_container.classList.toggle("active");

    if (modal_container.classList.contains("active")){
        let icons = '<i class="bi bi-caret-left-fill left-arrow"></i><i class="bi bi-caret-right-fill right-arrow"></i>'
        var content = e.target.parentElement.innerHTML;

        modal.innerHTML = icons + content;
    }
}