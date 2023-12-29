
import { pedirCarta, determinarGanador, acumularPuntos, crearCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos los puntos mínimos que debe tener la computadora para ganar
 * @param {Array<String>} deck deck de cartas
 */

export const turnoComputadora = (puntosJugadores, puntosMinimos, deck) =>{
    let puntosComputadora = 0;
    do  {
        const carta = pedirCarta(deck)
        console.log(carta)
        puntosComputadora = acumularPuntos(puntosJugadores, carta, puntosJugadores.length - 1); 
        crearCarta(carta, puntosJugadores.length - 1);       

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);

}