/* VÝSLEDKY TURNAJA – upravuješ len tento súbor, nie index.html */
window.TURNAJ = {

  /* Výsledky: "číslo zápasu": [skóre prvého tímu, skóre druhého tímu]
     Prvý tím je ten, ktorý je v zápase uvedený hore.
     Príklad: "I": [13, 8]  znamená, že v zápase I. vyhral T12 (13:8) nad T1.
     Víťaz postúpi do ďalšieho zápasu sám. */
  vysledky: {
     "I": [13, 8],
    // "II": [9, 13],
  },

  /* Skutočný čas začiatku, ak sa líši od plánu. Príklad: "V": "9:35" */
  zaciatok: {
    // "V": "9:35",
  },

  /* Zápasy, ktoré sa práve hrajú (zobrazia sa červeno). Príklad: ["V"] */
  prebieha: [
    // "V",
  ]
};
