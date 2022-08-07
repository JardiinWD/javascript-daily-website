//#region Variabili e Costanti
/* Seleziono la mia lista non ordinata con tutti i list item */
const navbarLinks = document.getElementById("navbarLinks")
console.log(navbarLinks);


//#endregion

//#region Arrays/Objects

/* Links Navbar */
const nLinks = [
    {
        liClass : 'nav-item',
        aClass : 'nav-link active',
        href : '/',
        title : 'Home'
    },
    {
        liClass : 'nav-item',
        aClass : 'nav-link',
        href : '/',
        title : 'About'
    },
    {
        liClass : 'nav-item',
        aClass : 'nav-link',
        href : '/',
        title : 'Services'
    },
    {
        liClass : 'nav-item',
        aClass : 'nav-link',
        href : '/',
        title : 'Portfolio'
    },
    {
        liClass : 'nav-item',
        aClass : 'nav-link',
        href : '/',
        title : 'Pages'
    },    
    {
        liClass : 'nav-item',
        aClass : 'nav-link',
        href : '/',
        title : 'Blog'
    },
    {
        liClass : 'nav-item',
        aClass : 'nav-link',
        href : '/',
        title : 'Contacts'
    },
]
console.log(nLinks);

//#endregion

//#region Cicli
nLinks.forEach(element => {
    let singleLink = 
    `
    <li class="${element.liClass}">
        <a class="${element.aClass}" href="${element.href}">${element.title}</a>
    </li>
    `
    navbarLinks.insertAdjacentHTML('beforeend', singleLink)
})



//#endregion

