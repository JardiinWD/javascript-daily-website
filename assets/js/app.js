//#region Variabili e Costanti

/* Seleziono la mia lista non ordinata con tutti i list item */
const navbarLinks = document.getElementById("navbarLinks")
console.log(navbarLinks);

/* Seleziono la mia row principale con all'interno i brands */
const partnersContainer = document.getElementById("siteBrands")
console.log(partnersContainer);

/* Seleziono la mia row principale per i servizi offerti */
const serviceContainer = document.getElementById("service")
console.log(serviceContainer);

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

//#endregion

//#region Arrays/Objects

/* Links Navbar */
const nLinks = [
    {
        liClass: 'nav-item',
        aClass: 'nav-link active',
        href: '/',
        title: 'Home'
    },
    {
        liClass: 'nav-item',
        aClass: 'nav-link',
        href: '/',
        title: 'About'
    },
    {
        liClass: 'nav-item',
        aClass: 'nav-link',
        href: '/',
        title: 'Services'
    },
    {
        liClass: 'nav-item',
        aClass: 'nav-link',
        href: '/',
        title: 'Portfolio'
    },
    {
        liClass: 'nav-item',
        aClass: 'nav-link',
        href: '/',
        title: 'Pages'
    },
    {
        liClass: 'nav-item',
        aClass: 'nav-link',
        href: '/',
        title: 'Blog'
    },
    {
        liClass: 'nav-item',
        aClass: 'nav-link',
        href: '/',
        title: 'Contacts'
    },
]
/* console.log(nLinks); */

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

//#endregion

//#region Cicli

/* Ciclo per iterare link alla navbar */
nLinks.forEach(element => {
    let singleLink =
        `
    <li class="${element.liClass}">
        <a class="${element.aClass}" href="${element.href}">${element.title}</a>
    </li>
    `
    navbarLinks.insertAdjacentHTML('beforeend', singleLink)
})

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

//#endregion

