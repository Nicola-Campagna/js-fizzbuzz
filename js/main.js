// TRACCIA:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
//     ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro ?
//     Abbiamo visto qualcosa di particolare che possiamo usare ?
//         Consigli del giorno:
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS 1:
// Crea un container nel DOM, aggiungendo(attraverso la funzione`append()`) un elemento html con il numero o la stringa corretta da mostrare.
//     BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
// Buon lavoro e buon divertimento! : faccia_leggermente_sorridente:


// Scrivi un programma che stampi in console i numeri da 1 a 100,
// creare elementi che si stampino da 1 a 100 in console 

// fare un <ul> in cui andranno i <li> con i n/buzz/frizzbazz
const listEl = document.getElementById("unList");
console.log(listEl);

// ciclo per stampare e aggiungere <li> numerati da 0a100 in console:
for (let i = 1; i <= 100; i++) {
    const listItems = document.createElement('li');
    console.log(listItems + i);
    listItems.innerHTML = i;
    listEl.append(listItems);
    listItems.classList.add("box");
    // aggiungere i numeri da0a100 in pagina dandogli la classe box;

    // SE i n sono multipli di 3 e 5 yellow
    if (i % 3 == 0 && i % 5 == 0) {
        listItems.classList.add("box-2");
        listItems.innerHTML = "FIZZBIZZ";
        console.log(listItems + i + " FIZZBIZZ");
    }
    // ALTRIMENTI SE i n sono multipli di 5 red
    else if (i % 5 == 0) {
        listItems.classList.add("box-4");
        listItems.innerHTML = "BIZZ";
        console.log(listItems + i + " BIZZ");
    }
    // ALTRIMENTI SE i n sono multipli di 3 green 
    else if (i % 3 == 0) {
        listItems.classList.add("box-3");
        listItems.innerHTML = "FIZZ";
        console.log(listItems + i + " FIZZ");
    }
    // ALTRIMENTI blue
    else {
        listItems.classList.add("box");
    }


}
