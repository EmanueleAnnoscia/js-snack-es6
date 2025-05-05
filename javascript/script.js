const biciclette = [
    {
      nome: "Bianchi Oltre XR4",
      peso: 7.1
    },
    {
      nome: "Pinarello Dogma F12",
      peso: 6.9
    },
    {
      nome: "Cannondale SuperSix EVO",
      peso: 7.3
    },
    {
      nome: "Specialized Tarmac SL7",
      peso: 6.8
    },
    {
      nome: "Trek Émonda SLR 9",
      peso: 6.7
    }
  ];

  let pesoMinore = biciclette[1];

  for(let i=0; i<biciclette.length; i++){
    
    if(biciclette[i].peso < pesoMinore.peso ){
        console.log(`la bicicletta più leggera è ${pesoMinore.nome}`)
    }
  }
  
  const biciLeggera = document.getElementById("leggera")
  biciLeggera.innerHTML = `la bicicletta più leggera è ${pesoMinore.nome}`


  const squadreCalcio = [
    {
      nome: "Inter",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Juventus",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Milan",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Napoli",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Roma",
      puntiFatti: 0,
      falliSubiti: 0
    }
  ];
  
// squadreCalcio.puntiFatti = Math.floor(Math.random()*80 +1)
// squadreCalcio.falliSubiti = Math.floor(Math.random()*80 +1)
// console.log(squadreCalcio)

const arrayNomiFalli = [];

for(i = 0; i< squadreCalcio.length; i++){
    squadreCalcio[i].puntiFatti = Math.floor(Math.random()*80 +1)
    squadreCalcio[i].falliSubiti = Math.floor(Math.random()*80 +1)
    arrayNomiFalli.push(squadreCalcio[i].nome, squadreCalcio[i].falliSubiti)
}



console.log(arrayNomiFalli)


// snack 3 bonus 

// 1. L'utente crea il proprio array
const inputUtente = prompt("Inserisci una serie di numeri separati da virgola (es: 10,20,30,40):");
const arrayUtente = inputUtente.split(",").map(num => parseInt(num.trim()));

// 2. L'utente inserisce due numeri presenti nell'array
const inputA = parseInt(prompt("Inserisci il primo valore (deve esistere nell'array):"));
const inputB = parseInt(prompt("Inserisci il secondo valore (deve esistere nell'array):"));

// 3. La funzione per estrarre i numeri tra due valori
function estraiTraValori(array, valoreA, valoreB) {
  let indiceA = -1;
  let indiceB = -1;

  // Trova gli indici
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valoreA && indiceA === -1) indiceA = i;
    if (array[i] === valoreB && indiceB === -1) indiceB = i;
  }

  // Controlli
  if (indiceA === -1 || indiceB === -1) {
    console.log("Uno o entrambi i valori non sono presenti nell'array.");
    return [];
  }

  // Assicuriamoci che indiceA venga prima di indiceB
  if (indiceA > indiceB) {
    // Se i valori sono invertiti, li scambiamo
    let temp = indiceA;
    indiceA = indiceB;
    indiceB = temp;
  }

  // Estrazione manuale
  const nuovoArray = [];
  for (let i = indiceA; i <= indiceB; i++) {
    nuovoArray.push(array[i]);
  }

  return nuovoArray;
}

// 4. Usiamo la funzione e stampiamo i risultati
const risultato = estraiTraValori(arrayUtente, inputA, inputB);
console.log("Array creato:", arrayUtente);
console.log("Valori estratti:", risultato);
