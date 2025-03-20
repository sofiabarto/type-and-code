export const configurazione = {
  //oggetto, lista di informazioni, variabili
  testo: "e",

  let punti=[10]

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 1,

  nascondiInterfaccia: true,

  let colore1,colore2;
  
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */

function generaPunti() {
  for (let i = 0; i < testo.length; i++) {
      // Eseguiamo un ciclo su ogni carattere del testo per trovare i punti della lettera
      // Supponiamo che le ellissi siano posizionate lungo una traiettoria orizzontale
      for (let j = 0; j < 50; j++) {
          let x = map(i + j, 0, testo.length * 50, 100, width - 100);
          let y = map(j, 0, 50, 100, height - 100);
          punti.push({ x: x, y: y });
      }
  }
}

function sfumaturaLuminosità() {
  let gradienteX = (sin(frameCount * 0.01) + 1) / 2; // Sfumatura che si muove orizzontalmente
  let gradienteY = (cos(frameCount * 0.01) + 1) / 2; // Sfumatura che si muove verticalmente

  colore1 = color(255 * gradienteX, 0, 255 * (1 - gradienteY));  // Colore che cambia dinamicamente
  colore2 = color(255 * (1 - gradienteX), 0, 255 * gradienteY);  // Colore che cambia dinamicamente
// Creiamo un gradiente orizzontale che attraversa la tela
for (let i = 0; i < width; i++) {
  let inter = map(i, 0, width, 0, 1); // Interpolazione per il gradiente
  let col = lerpColor(colore1, colore2, inter);
  stroke(col);
  line(i, 0, i, height); // Disegna la linea verticale per il gradiente
}
}
  
for (let i = 0; i < punti.length; i++) {
  fill(255, 0, 0); // Colore rosso per le ellissi
  noStroke();
  ellipse(punti[i].x, punti[i].y, 10, 10); // Disegna un'ellisse
}



export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) 
{}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("black");

  // [INFO] Rimuovi il commento per disegnare il testo
  fill("black");
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
