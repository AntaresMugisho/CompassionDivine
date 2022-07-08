// +------------------------------------------------------------+
// | Show / Hide menu on mobile and tablet -- Toutes les pages  |
// +------------------------------------------------------------+

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

// +------------------------------------------------------------+
// |Animations intersection observer -- Page d'accueil          |
// +------------------------------------------------------------+

if (document.title === "Eglise la Compassion Divine - Accueil"){

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
}

// +------------------------------------------------------------+
// | Recherche dynamique -- Page Enseignements                  |
// +------------------------------------------------------------+

if (document.title === "ECD - Enseignements"){
    // Déclencheurs d'évenement
    const searchInput = document.querySelector("#search");
    const searchButton = document.querySelector("#submit-btn");
    
    // Elements à masquer/afficher lors d'une recherche
    const lessonsContainer = document.querySelectorAll(".lessons_container");
    const lessonFilterSubtitle = document.querySelectorAll(".lessons_filter__subtitle")
    
    // Champ de résultats
    const resultTitle = document.querySelector(".result-title");
    const resultStatus = document.querySelector(".result_status");
    const resultContainer = document.querySelector(".result-container");
    
    const dataArray = document.querySelectorAll(".lesson");
    
    
    searchInput.addEventListener("input", filterData);
    // searchButton.addEventListener("click", filterData);
    
    function filterData(){
     
        if (searchInput.value.length > 0){
    
            searchedString = searchInput.value.toLowerCase();
            
            resultTitle.innerText = "Résultats de la recherche";
    
            let occurences = 0;
    
            for (i = 0; i < dataArray.length; i++){
                let foundLesson =  dataArray[i];
                
                if (foundLesson.innerText.toLowerCase().includes(searchedString)){
                    
                    occurences++;
                    resultStatus.innerText = `${occurences} résultats obtenus.`;
                    
                    foundLesson.style.display = "grid";      
                }
                else{
                    foundLesson.style.display = "none";
                }
            }   
        }
        else{
            resultTitle.innerText = "Enseignements suggérés";
            resultStatus.innerText = ""
            lessonsContainer.forEach(lesson => lesson.style.display = "grid");
        }
    }   
}

// +------------------------------------------------------------+
// | Fenêtre modale -- Page Médias                              |
// +------------------------------------------------------------+

if (document.title === "ECD - Médias"){

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
}