import { divCartasJugadores } from "./const-variables";

export   const crearCarta = (carta, turno) => {
    // solo crea  el tag de imagen
    const imgCarta = document.createElement('img');

    // añade el src al elemento html de imagen 
    imgCarta.src = `assets/cartas/${carta}.png`

    // añade la clase al elemento html de imagen
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);

}