
/**
 * Pedir una carta
 * @param {Array<String>} deck 
 * @returns {String} Carta del deck sea '2C' = 2 de trebol, 'KH' = K de corazones, etc
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0){
    throw 'No hay cartas en el deck'
  }
  return deck.pop();
}


/**
 * Calcula el valor de una carta
 * @param {String} Una carta del deck 
 * @returns {Number} Valor de la carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  let puntos = 0

  // if (isNaN(valor)){
  //     puntos =  (valor === 'A') ? 11: 10;

  // } else {
  //     puntos =  valor * 1;

  // }
  puntos = (isNaN(valor)) ? 
          (valor === 'A') ? 11: 10
          : valor * 1;
  return puntos
}