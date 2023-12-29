import { valorCarta, small } from './';

export const acumularPuntos = (puntosJugadores, carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    small[turno].innerHTML = `<b>${puntosJugadores[turno]}</b>`;
    return puntosJugadores[turno];
}