//#region Variabili e Costanti

/* Seleziono la mia row principale con all'interno i brands */
const partnersContainer = document.getElementById("siteBrands")
console.log(partnersContainer);

/* Seleziono la mia row principale per i servizi offerti */
const serviceContainer = document.getElementById("service")
console.log(serviceContainer);

/* Seleziono il mio container di Buttons che filtrano */
const filterButtons = document.getElementById("filters-buttons")
console.log(filterButtons);

/* Seleziono la mia row principale per le cards dei progetti */
const projectCards = document.getElementById("project-cards")
console.log(projectCards);


//#endregion

//#region Arrays/Objects

const partners = [
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo1.png',
        alt: 'Brand 1'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo2.png',
        alt: 'Brand 2'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo3.png',
        alt: 'Brand 3'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo4.png',
        alt: 'Brand 4'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo5.png',
        alt: 'Brand 5'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo6.png',
        alt: 'Brand 6'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo7.png',
        alt: 'Brand 7'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo8.png',
        alt: 'Brand 8'
    },
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-6',
        brand_class: 'single-brand',
        brand_img: './assets/img/brands/logo9.png',
        alt: 'Brand 9'
    },
]
/* console.log(partners); */

const serviceOffers = [
    /* WP Developer */
    {
        col_classes: 'col-lg-3 col-md-6 col-sm-12', // <div class="col-lg-3 col-md-6 col-sm-12">
        services_wrap: 'services', // <div class="services">
        col_img_class: 'services-img text-center py-4', //  <div class="services-img text-center py-4">
        img_service: './assets/img/services/s1.png', // <img src="./assets/img/services/s1.png" alt="Services 1">
        img_alt: 'Services 1', // <img src="./assets/img/services/s1.png" alt="Services 1">
        card_style: 'card-body text-center', // <div class="card-body text-center">
        h5_classes: 'card-title text-uppercase font-roboto', // <h5 class="card-title text-uppercase font-roboto">Wp Developer</h5>
        h5_text: 'Wp Developer', // <h5 class="card-title text-uppercase font-roboto">Wp Developer</h5>
        p_classes: 'card-text text-secondary', // <p class="card-text text-secondary">
        p_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a.'
    },
    /* UX/UI Design */
    {
        col_classes: 'col-lg-3 col-md-6 col-sm-12', // <div class="col-lg-3 col-md-6 col-sm-12">
        services_wrap: 'services', // <div class="services">
        col_img_class: 'services-img text-center py-4', //  <div class="services-img text-center py-4">
        img_service: './assets/img/services/s2.png', // <img src="./assets/img/services/s2.png" alt="Services 2">
        img_alt: 'Services 2', // <img src="./assets/img/services/s2.png" alt="Services 2">
        card_style: 'card-body text-center', // <div class="card-body text-center">
        h5_classes: 'card-title text-uppercase font-roboto', // <h5 class="card-title text-uppercase font-roboto">UX/UI Design</h5>
        h5_text: 'UX/UI Design', // <h5 class="card-title text-uppercase font-roboto">UX/UI Design</h5>
        p_classes: 'card-text text-secondary', // <p class="card-text text-secondary">
        p_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a.'
    },
    /* Web Design */
    {
        col_classes: 'col-lg-3 col-md-6 col-sm-12', // <div class="col-lg-3 col-md-6 col-sm-12">
        services_wrap: 'services', // <div class="services">
        col_img_class: 'services-img text-center py-4', //  <div class="services-img text-center py-4">
        img_service: './assets/img/services/s3.png', // <img src="./assets/img/services/s3.png" alt="Services 3">
        img_alt: 'Services 3', // <img src="./assets/img/services/s3.png" alt="Services 3">
        card_style: 'card-body text-center', // <div class="card-body text-center">
        h5_classes: 'card-title text-uppercase font-roboto', // <h5 class="card-title text-uppercase font-roboto">Web Design</h5>
        h5_text: 'Web Design', // <h5 class="card-title text-uppercase font-roboto">Web Design</h5>
        p_classes: 'card-text text-secondary', // <p class="card-text text-secondary">
        p_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a.'
    },
    /* SEO Optimize */
    {
        col_classes: 'col-lg-3 col-md-6 col-sm-12', // <div class="col-lg-3 col-md-6 col-sm-12">
        services_wrap: 'services', // <div class="services">
        col_img_class: 'services-img text-center py-4', //  <div class="services-img text-center py-4">
        img_service: './assets/img/services/s4.png', // <img src="./assets/img/services/s4.png" alt="Services 4">
        img_alt: 'Services 4', // <img src="./assets/img/services/s4.png" alt="Services 4">
        card_style: 'card-body text-center', // <div class="card-body text-center">
        h5_classes: 'card-title text-uppercase font-roboto', // <h5 class="card-title text-uppercase font-roboto">SEO Optimize</h5>
        h5_text: 'SEO Optimize', // <h5 class="card-title text-uppercase font-roboto">SEO Optimize</h5>
        p_classes: 'card-text text-secondary', // <p class="card-text text-secondary">
        p_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a.'
    },
]
/* console.log(serviceOffers); */

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

const projectItems = [
    /* Minimul Design */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item latest', // <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
        wrapper: 'our-project', // <div class="our-project">
        img_wrap: 'img', // <div class="img">
        src: './assets/img/portfolio/p1.jpg', // <img src="./assets/img/portfolio/p1.jpg" alt="Portfolio 1">
        alt: 'Portfolio 1', // <img src="./assets/img/portfolio/p1.jpg" alt="Portfolio 1">
        info_wrap: 'title py-4', // <div class="title py-4">
        h4_class: 'text-uppercase', // <div class="title py-4">
        h4_text: 'Minimul Design',
        span_class: 'text-secondary', // <span class="text-secondary">Latest, Portfolio</span>
        span_text: 'Latest, Portfolio'
    },
    /* Paint Wall */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item popular',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p2.jpg',
        alt: 'Portfolio 2',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Paint Wall',
        span_class: 'text-secondary',
        span_text: 'Popular, Portfolio'
    },
    /* Female Light */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item popular',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p3.jpg',
        alt: 'Portfolio 3',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Female Light',
        span_class: 'text-secondary',
        span_text: 'Popular, Portfolio'
    },
    /* Fourth Air */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item upcoming',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p4.jpg',
        alt: 'Portfolio 4',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Fourth Air',
        span_class: 'text-secondary',
        span_text: 'Upcoming, Portfolio'
    },
    /* Multiple Fown */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item upcoming',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p5.jpg',
        alt: 'Portfolio 5',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Multiple Fown',
        span_class: 'text-secondary',
        span_text: 'Upcoming, Portfolio'
    },
    /* Together Sign */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item following',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p6.jpg',
        alt: 'Portfolio 6',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Together Sign',
        span_class: 'text-secondary',
        span_text: 'Following, Portfolio'
    },
    /* Green Heaven */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item following',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p7.jpg',
        alt: 'Portfolio 7',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Green Heaven',
        span_class: 'text-secondary',
        span_text: 'Following, Portfolio'
    },
    /* Fly Male */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item following',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p8.jpg',
        alt: 'Portfolio 8',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Fly Male',
        span_class: 'text-secondary',
        span_text: 'Following, Portfolio'
    },
    /* Camera Lens */
    {
        col_classes: 'col-lg-4 col-md-6 col-sm-12 element-item upcoming',
        wrapper: 'our-project',
        img_wrap: 'img',
        src: './assets/img/portfolio/p9.jpg',
        alt: 'Portfolio 9',
        info_wrap: 'title py-4',
        h4_class: 'text-uppercase',
        h4_text: 'Camera Lens',
        span_class: 'text-secondary',
        span_text: 'Upcoming, Portfolio'
    },
]


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
})

async function fetchNavLinks() {
    const response = await fetch('./assets/json/nLinks.json');
    const data = await response.json();
    console.log(data); // Verifico in console
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


//#endregion

//#region Cicli

/* Valuta di fare tutto tramite Chiamate AJAX/JSON */

/* Ciclo per iterare cards dei partner */
partners.forEach(element => {
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

/* Ciclo per iterare le cards dei servizi offerti */
serviceOffers.forEach(element => {
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

/* Ciclo per iterare i buttons delle cards progetti */
filteredButtons.forEach(element => {
    let singleFilterButton =
        `
        <button type="${element.type}" data-filter="${element.data_filter}" class="${element.classes}">${element.text}</button>
        `
    filterButtons.insertAdjacentHTML('beforeend', singleFilterButton)
})

projectItems.forEach(element => {
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

//#endregion

