// SIDE MENU
let menu_btn = document.querySelector(".menu_btn");
let close_btn = document.querySelector(".close_btn");
let side_menu = document.querySelector(".side_menu");
let site_name = document.querySelector(".site_name")

const side_menu_content = `
            <div class="top_of_menu">
                <button class="close_btn" onCLick="hide_menu()"></button>
                <div class="input_control">
                    <input type="text" id="search" placeholder="Rechercher">
                    <label for="search" >
                        <img class="search_icon" src="../icons/icon_search.svg" alt="">
                    </label>
                </div>
            </div>

            <div class="menu_links">
                <a href="#">Découvrir les communautés de l'ECD</a>
                <a href="../html/about_us.html#vision_ecd">Vision de l'ECD</a>
                <a href="../html/calendrier.html">Nos Programmes</a>
                <a href="#">Prières</a>
                <a href="../html/small_themes.html">Enseigmements Bibliques</a>
                <div class="blank_space"></div>
                <a href="../html/donation.html">Faire un don</a>
                <a href="#">Questions et Réponses</a>
            </div>
            <div class="gray_line"></div>
            <h3 class="small_guides_title">QUELQUES GUIDES</h3>
            <div class="small_guides">
                <a href="#">
                    <div class="guid_1">
                        <h4>Une vie Chrétienne.</h4>
                    </div>
                </a>
                <a href="#">
                    <div class="guid_2">
                        <h4>La Bible.</h4>
                    </div>
                </a>
                <a href="#">
                    <div class="guid_3">
                        <h4>Conseils pour prier.</h4>
                    </div>
                </a>
            </div>
            <div class="select_control">
                <svg class="icon icon-world" width="40px" height="20px" fill="#FFFFFF" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                <p>Langue : </p>
                <select name="languages" class="languages">
                    <option value="francais">Français</option>
                    <!-- <option value="english">English</option> -->
                </select>
            </div>
            <div class="menu_links other_menus">
                <a href="#contact_us">Nous contacter</a>
                <a href="../html/about_us.html">Qui sommes nous ?</a>
            </div>

            <h3 class="follow_us_to">DECOUVREZ NOUS AUSSI SUR</h3>
            <div class="menu_footer">
                <div class="small_grey_line"></div>
                <div class="social_menu">
                    <a href="https://youtube.com/channel/UCIQj-195C9XE0pixHVvYxjA">
                        <svg class="icon icon-youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" role="img" focusable="false"><rect x="0" fill="none" width="24" height="24"></rect><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"></path></g></svg>
                    </a>
                    
                    <a href="https://www.facebook.com/groups/1070658120030881/" targe="_blank">
                        <svg class="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16" aria-hidden="true" role="img" focusable="false"><rect x="0" fill="none" width="24" height="24"></rect><g><path d="M4.563 4.964h2.295l-0.268 2.536h-2.027v7.357h-3.045v-7.357h-1.518v-2.536h1.518v-1.527q0-1.625 0.768-2.46t2.527-0.835h2.027v2.536h-1.268q-0.348 0-0.558 0.058t-0.304 0.21-0.121 0.308-0.027 0.442v1.268z"></path></g></svg>
                    </a>
                </div>
            </div>
        `

function show_menu(){
    menu_btn.style.display="none";

    side_menu.style.display="block";
    side_menu.innerHTML = side_menu_content;
   
}

function hide_menu(){
    menu_btn.style.display="block";

    side_menu.style.display="none";
    side_menu.innerHTML = "";
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
