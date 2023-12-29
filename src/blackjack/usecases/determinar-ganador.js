

export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout ( () => {
        if (puntosComputadora === puntosMinimos && puntosComputadora >= 21 && puntosMinimos >= 21){
            alert("Empate");
        } else if (puntosComputadora > 21 && puntosMinimos <= 21){
            alert("Ganaste");
        } else if (puntosMinimos > 21){
            alert("Perdiste");
        } else if (puntosComputadora > puntosMinimos && puntosComputadora <= 21){
            alert("Perdiste");
        } else if (puntosMinimos > puntosComputadora && puntosMinimos <= 21){
            alert("Ganaste");
        } else if ((puntosComputadora > 21 && puntosMinimos > 21) || (puntosComputadora === puntosMinimos && puntosComputadora <= 21 && puntosMinimos <= 21)){
            alert("Empate");
        }
    }, 100 );
}