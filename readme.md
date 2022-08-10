# Progetto Layout Portfolio

In questo progetto viene rappresentata una landing page (non-responsive causa mancanza screen layout) riprodotta tramite `HTML/CSS` e con l'introduzione di nuovi argomenti/Framework in `Javascript/Jquery`.

## **CSS**

In questo progetto, lato fogli di stile, sono stati implementati diversi fogli come :

- `font-awesome` : E' stato scaricato e installato in locale. File presente nella cartella `./assets/css`.
- `bootstrap` : E' stato scaricato e installato in locale. File presente nella cartella `./assets/css`.
- `own-carousel` : File predisposti per il carosello dell'About me. E' stato scaricato e installato in locale. file presente nella cartella `./assets/css`. (link al framework : https://owlcarousel2.github.io/OwlCarousel2/)
- `style` : File predisposto per lo stile di tutto il layout

## **JAVASCRIPT/JQUERY**

In questo progetto per dare dinamicità alla pagina sono stati utilizzate diverse librerie e diverse metodologie che verranno spiegate più in là.

- `jquery` : E' stato scaricato ed installato in locale, il file predisposto per il carosello e il filtro sulle categorie.
- `bootstrap` : E' stato scaricato ed installato in locale. File presente nella cartella `./assets/js/`.
- `isotope` : E' la libreria, scaricata ed installata in locale che ha il compito di filtrare le `categorie` dei progetti.
- `own-carousel` : E' la libreria, scaricata ed installata in locale che ha il compito di `creare` il carosello delle recensioni utente.
- `app` : E' il mio file principale dove sono presenti all'interno :
  - `async function` : Funzioni async che hanno il compito di `manipolare` il DOM.
  - `jquery function` : Funzioni, in jQuery, che hanno il compito di `manovrare` il carosello e il filtro.

### **ISOTOPE**

Funzione, scritta in jQuery, responsabile del filtro per `categorie`.

```js
$(document).ready(function () {
  /* Prendo i miei buttons */
  let $btns = $(".project-area .button-group button");
  /* Aggiungo evento al click */
  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active"); // Aggiungo al mio target la classe attiva
    let selector = $(e.target).attr("data-filter"); // in base al data-filter creo un selettore
    /* Avvio, tramite jquery il filtro in base al selettore, nella function isotope */
    $(".project-area .grid").isotope({
      filter: selector,
    });
  });
});
```

### **CAROUSEL**

Funzione, scritta in jQuery, responsabile della `creazione` del carosello contenente le varie `recensioni`.

```js
$(document).ready(function () {
  /* OWL Carousel */
  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true, // Ciclo loop infinito
    autoplay: true, // Autoplay per il carosello
    dots: true, // puntini sotto
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
    },
  });
});
```

## **JSON**

Tutti i miei `array` di oggetto sono stati poi trasferiti in diversi file `json`. Tutto ciò è stato fatto, più che per dare dinamicità alla pagina, per uno scopo `didattico`, poichè :

- `async function` : Ho avuto modo di approfondire `funzioni` ancora non viste. In questo modo sono riuscito a `manipolare il DOM` con molta più `semplicità`.
- `fetch|try|error` : In questo modo sono stato in grado di apprendere il funzionamento di una chiamata `AJAX` tra un file `JSON` e un fie `JS`.

Qui di seguito un esempio di una chiamata `AJAX` tra il mio file `JSON` e la mia `async function`, pensata per `manipolare il DOM` e iterare il mio array di oggetto presente.

```js
/**
 * Funzione per ciclare singoli links navbar tramite chiamata AJAX
 */
async function fetchNavLinks() {
  /* Salvo il mio JSON nel response */
  const response = await fetch("./assets/json/nLinks.json");
  /* Avvio la chiamata API tramite metodo try/catch */
  try {
    data = await response.json();
    console.log(data); // Verifico in console
  } catch (error) {
    console.error(error);
  }

  /* Qui devo dichiarare il mio ID da prendere */
  const navbarLinks = document.getElementById("navbarLinks");

  data.forEach((element) => {
    let singleLink = `
                <li class="${element.liClass}">
                    <a class="${element.aClass}" href="${element.href}">${element.title}</a>
                </li>
                `;
    navbarLinks.insertAdjacentHTML("beforeend", singleLink);
  });
}
/* Ora invoco la mia function per dichiarare i miei Links */
fetchNavLinks();
```

## **SCREENSHOT APP**

Questo è lo screen del prodotto finito.

![Filtro](./condizione-app.png)
