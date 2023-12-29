import _ from 'underscore';

/**
 *  Crea un deck de cartas
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un arreglo de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo) 
        }
    }
    return _.shuffle(deck);
}
