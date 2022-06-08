
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
