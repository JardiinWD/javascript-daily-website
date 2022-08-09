//#region Variabili e Costanti

/* Seleziono la mia lista non ordinata con tutti i list item */
const navbarLinks = document.getElementById("navbarLinks")
console.log(navbarLinks);

/* Seleziono la mia row principale con all'interno i brands */
const partnersContainer = document.getElementById("siteBrands")
console.log(partnersContainer);

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

//#endregion

