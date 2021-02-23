let square;
let cpt = 0;
const onClick = () => {
    cpt ++;
    console.log('on click')
    square.classList.toggle('green')
    square.innerHTML = cpt;
}

// Attendre que le DOM soit connu pour lancer le code principal
document.addEventListener("DOMContentLoaded", function() {
    // Sékéctionner des éléments du DOM
    square = document.querySelector("#square");
    const btn = document.querySelector("#btn");
    // Mettre en place un écouteur sur le bouton
    btn.addEventListener("click", onClick);
})