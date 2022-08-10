//#region Variabili e Costanti

/* Seleziono il mio container di Buttons che filtrano */
const filterButtons = document.getElementById("filters-buttons")
console.log(filterButtons);

//#endregion

//#region Arrays/Objects

/* Questo rimane qua perchè con chiamata Ajax perde data-filter */
const filteredButtons = [
    /* All Button */
    {
        type: 'button',
        classes: 'active',
        text: 'All',
        data_filter: ""
    },
    /* Popular Button */
    {
        type: 'button',
        classes: '',
        text: 'Popular',
        data_filter: ".popular"
    },
    /* Latest Button */
    {
        type: 'button',
        classes: '',
        text: 'Latest',
        data_filter: ".latest"
    },
    /* Following Button */
    {
        type: 'button',
        classes: '',
        text: 'Following',
        data_filter: ".following"
    },
    /* Upcoming Button */
    {
        type: 'button',
        classes: '',
        text: 'Upcoming',
        data_filter: ".upcoming"
    },
]
/* console.log(filteredButtons); */

//#endregion

//#region Functions

/* Filtro Isotope.js per le diverse categorie */
/* Fatta in JQuery */
$(document).ready(function () {
    /* Prendo i miei buttons */
    let $btns = $('.project-area .button-group button')
    /* Aggiungo evento al click */
    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass("active")
        e.target.classList.add('active') // Aggiungo al mio target la classe attiva
        let selector = $(e.target).attr('data-filter') // in base al data-filter creo un selettore
        /* Avvio, tramite jquery il filtro in base al selettore, nella function isotope */
        $('.project-area .grid').isotope({
            filter: selector
        })
    })

    /* OWL Carousel */
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true, // puntini sotto
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })
})

/**
 * Funzione per ciclare singoli links navbar tramite chiamata AJAX
 */
async function fetchNavLinks() {
    /* Salvo il mio JSON nel response */
    const response = await fetch('./assets/json/nLinks.json');
    /* Avvio la chiamata API tramite metodo try/catch */
    try {
        data = await response.json();
        console.log(data); // Verifico in console
    }
    catch (error) {
        console.error(error)
    }

    /* Qui devo dichiarare il mio ID da prendere */
    const navbarLinks = document.getElementById("navbarLinks")

    data.forEach(element => {
        let singleLink =
            `
            <li class="${element.liClass}">
                <a class="${element.aClass}" href="${element.href}">${element.title}</a>
            </li>
            `
        navbarLinks.insertAdjacentHTML('beforeend', singleLink)
    })
}
/* Ora invoco la mia function per dichiarare i miei Links */
fetchNavLinks()

/**
 * Funzione per generare cards partners dinamiche tramite chiamata AJAX
 */
async function partners() {
    /* Salvo il mio JSON nel response */
    const response = await fetch('./assets/json/partners.json');
    /* Avvio la chiamata API tramite metodo try/catch */
    try {
        data = await response.json();
        console.log(data); // Verifico in console
    }
    catch (error) {
        console.error(error)
    }

    /* Seleziono la mia row principale con all'interno i brands */
    const partnersContainer = document.getElementById("siteBrands")
    console.log(partnersContainer);

    /* Ciclo per iterare cards dei partner */
    data.forEach(element => {
        let singleBrand =
            `
            <div class="${element.col_classes}">
                <div class="${element.brand_class}">
                    <img src="${element.brand_img}" alt="${element.alt}">
                </div>
            </div>
            `
        partnersContainer.insertAdjacentHTML('beforeend', singleBrand)
    })
}

/* Ora invoco la mia function per generare cards partners */
partners()

/**
 * Functions per iterare le cards dei servizi offerti tramite chiamata AJAX
 */

async function serviceOffers() {
    /* Salvo il mio JSON nel response */
    const response = await fetch('./assets/json/serviceOffers.json');
    /* Avvio la chiamata API tramite metodo try/catch */
    try {
        data = await response.json();
        console.log(data); // Verifico in console
    }
    catch (error) {
        console.error(error)
    }

    /* Seleziono la mia row principale per i servizi offerti */
    const serviceContainer = document.getElementById("service")
    console.log(serviceContainer);

    /* Ciclo per iterare le cards dei servizi offerti */
    data.forEach(element => {
        let singleService =
            `
        <div class="${element.col_classes}">
            <div class="${element.services_wrap}">
                <div class="${element.col_img_class}">
                    <img src="${element.img_service}" alt="${element.img_alt}">
                </div>
                <div class="${element.card_style}">
                    <h5 class="${element.h5_classes}">${element.h5_text}</h5>  
                    <p class="${element.p_classes}">${element.p_text}</p>
                </div>
            </div>
        </div>  
        `
        serviceContainer.insertAdjacentHTML('beforeend', singleService)
    })
}
/* Ora invoco la mia function per generare cards servizi offerti*/
serviceOffers()

async function projectItems() {
    /* Salvo il mio JSON nel response */
    const response = await fetch('./assets/json/projectItems.json');
    /* Avvio la chiamata API tramite metodo try/catch */
    try {
        data = await response.json();
        console.log(data); // Verifico in console
    }
    catch (error) {
        console.error(error)
    }

    /* Seleziono la mia row principale per le cards dei progetti */
    const projectCards = document.getElementById("project-cards")
    console.log(projectCards);

    data.forEach(element => {
        let singleProject =
            `
            <div class="${element.col_classes}">
                <div class="${element.wrapper}">
                    <div class="${element.img_wrap}">
                        <img src="${element.src}" alt="${element.alt}">
                    </div>
                    <div class="${element.info_wrap}">
                        <h4 class="${element.h4_class}">${element.h4_text}</h4>
                        <span class="${element.span_class}">${element.span_text}</span>
                    </div>
                </div>
            </div> 
            `
        projectCards.insertAdjacentHTML('beforeend', singleProject)
    })
}
/* Ora invoco la mia function per generare cards dei progetti */
projectItems()

//#endregion

//#region Cicli

/* Ciclo per iterare i buttons delle cards progetti */
filteredButtons.forEach(element => {
    let singleFilterButton =
        `
        <button type="${element.type}" data-filter="${element.data_filter}" class="${element.classes}">${element.text}</button>
        `
    filterButtons.insertAdjacentHTML('beforeend', singleFilterButton)
})

//#endregion