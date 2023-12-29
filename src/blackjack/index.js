import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases';

// patron modulo
const miModulo = (() =>{
  'use strict'

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // elementos html 
  const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo");

  // donde se encuentra el puntaje de ambos jugadores
  const small =  document.querySelectorAll("small"),
        divCartasJugadores = document.querySelectorAll(".divCartas");


  const iniciarJuego = (numJugadores=2) =>{
     deck = crearDeck(tipos, especiales);
     puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
      }
      console.log(puntosJugadores);
      small.forEach(elem => elem.innerHTML = '<b>0</b>');
      divCartasJugadores.forEach(elem => elem.innerHTML = '');
      btnPedir.disabled = false;
      btnDetener.disabled = false;

  }



  // eventos 
  // funcion como parámetro de otra función es un callback
  btnPedir.addEventListener('click', ()=>{
      const carta = pedirCarta(deck);
      const puntosJugador= acumularPuntos(puntosJugadores, carta, 0);
      crearCarta(carta, 0);

      if (puntosJugador > 21){
          console.warn("Perdiste");
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores, puntosJugador, deck)
      } else if (puntosJugador === 21){
          console.warn("21, ganaste");
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores, puntosJugador, deck)
      }
  })

  btnDetener.addEventListener('click', ()=>{
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      console.log(puntosJugadores[0]);
      turnoComputadora(puntosJugadores, puntosJugadores[0], deck);
  })

  // iniciar un nuevo juego
  btnNuevo.addEventListener('click', ()=> {
      iniciarJuego(); 
  })

  return {
      // exportamos la fn iniciarJuego pero antes
      // la renombramos a 'iniciar'
      iniciar:iniciarJuego
  };

})();
