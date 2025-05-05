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