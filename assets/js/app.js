
// Show / Hide menu on mobile and tablet -- Toutes les pages

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

// Animations avec intersection observer -- Page d'accueil et footer

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






// Recherche dynamique -- Page Enseignements
// const searchInput = document.querySelector("#search");
// const searchButton = document.querySelector("#submit-btn");

// // const searchResult = document.querySelector(".lessons_container.fist-child");

// const dataArray = document.getElementsByClassName("lesson");

// const resultTitle = document.querySelector(".result-title");
// const resultContainer = document.querySelector(".result-container");

// let lessonsContainers = document.querySelectorAll(".lessons_container");

// searchButton.addEventListener("click", filterData);

// function filterData(){
//     resultContainer.innerHTML = ""
//     searchedString = searchInput.value.toLowerCase();

//     resultTitle.innerText = "Réultats de la recherche";
    
//     for (i = 0; i < dataArray.length; i++){
//         let lesson =  dataArray[i];
//         console.log("lesson :", lesson);
        
//         if (lesson.innerText.toLowerCase().includes(searchedString)){
//             resultContainer.appendChild(lesson); 
//         }
//     }
// }







// Fenêtre modale -- Page Médias

const modal_triggers = document.querySelectorAll(".modal-trigger");
const modal_container = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

modal_triggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal(e){
    modal_container.classList.toggle("active");

    if (modal_container.classList.contains("active")){
        let icons = '<i class="bi bi-caret-left-fill left-arrow"></i><i class="bi bi-caret-right-fill right-arrow"></i>'
        var content = e.target.parentElement.innerHTML;
        console.log(content)
        content = content.replace("mpj_thumb", "mpj_full");
        console.log(content)

        modal.innerHTML = icons + content;
    }
}


